import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7f_54bml.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7f_54bml"/>`,
		"fallback": "whh:eyeclose",
	});
}

export default Component;
