import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2tk3pb5j.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2tk3pb5j"/>`,
		"fallback": "whh:batteryaltsixty",
	});
}

export default Component;
