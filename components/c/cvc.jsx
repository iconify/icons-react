import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf2se5b6u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf2se5b6u"/>`,
		"fallback": "cryptocurrency:cvc",
	});
}

export default Component;
