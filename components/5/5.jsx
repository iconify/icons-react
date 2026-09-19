import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxef4ibam.css';

const viewBox = {"width":480,"height":752};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxef4ibam"/>`,
		"fallback": "ls:5",
	});
}

export default Component;
