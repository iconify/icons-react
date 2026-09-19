import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlpguibby.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlpguibby"/>`,
		"fallback": "fa:align-justify",
	});
}

export default Component;
