import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo9isi4jl.css';

const viewBox = {"width":512,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo9isi4jl"/>`,
		"fallback": "whh:icecreamalt",
	});
}

export default Component;
