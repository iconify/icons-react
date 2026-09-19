import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzzz3ybdl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzzz3ybdl"/>`,
		"fallback": "f7:gobackward",
	});
}

export default Component;
