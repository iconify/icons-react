import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0m211w8g.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0m211w8g"/>`,
		"fallback": "f7:bubble-middle-bottom-fill",
	});
}

export default Component;
