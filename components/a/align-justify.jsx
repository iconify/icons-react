import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjox5-scv.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjox5-scv"/>`,
		"fallback": "fa6-solid:align-justify",
	});
}

export default Component;
