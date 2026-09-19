import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2-j6pbjw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2-j6pbjw"/>`,
		"fallback": "whh:archlinux",
	});
}

export default Component;
