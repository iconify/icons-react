import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id7o3weik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id7o3weik"/>`,
		"fallback": "coolicons:file-text-fill-round",
	});
}

export default Component;
