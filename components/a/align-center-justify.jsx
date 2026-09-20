import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks1ait7gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks1ait7gr"/>`,
		"fallback": "uis:align-center-justify",
	});
}

export default Component;
