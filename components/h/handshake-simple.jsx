import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr-rl2bsa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr-rl2bsa"/>`,
		"fallback": "fa7-solid:handshake-simple",
	});
}

export default Component;
