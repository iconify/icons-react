import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg4rx1bxy.css';

const viewBox = {"width":1085.565,"height":1085.093};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg4rx1bxy"/>`,
		"fallback": "thesvg-color:get-glass-distribution",
	});
}

export default Component;
