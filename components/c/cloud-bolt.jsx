import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3dwbbbwm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3dwbbbwm"/>`,
		"fallback": "f7:cloud-bolt",
	});
}

export default Component;
