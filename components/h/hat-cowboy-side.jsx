import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtjs7gb5v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtjs7gb5v"/>`,
		"fallback": "fa7-solid:hat-cowboy-side",
	});
}

export default Component;
