import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y15k2bb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y15k2bb0f"/>`,
		"fallback": "coolicons:cloud-upload-round",
	});
}

export default Component;
