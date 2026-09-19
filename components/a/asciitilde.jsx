import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k27hhsbcx.css';

const viewBox = {"width":508,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k27hhsbcx"/>`,
		"fallback": "ls:asciitilde",
	});
}

export default Component;
