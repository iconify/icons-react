import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gre2h1byw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gre2h1byw"/>`,
		"fallback": "cil:command",
	});
}

export default Component;
