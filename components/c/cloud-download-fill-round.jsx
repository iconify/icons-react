import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clu1kebvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clu1kebvp"/>`,
		"fallback": "coolicons:cloud-download-fill-round",
	});
}

export default Component;
