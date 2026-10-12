import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dehwqjzue.css';
import '../../css/n/n-lsx4-9n.css';
import '../../css/j/jnla0ybqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dehwqjzue"/><path class="n-lsx4-9n"/><path class="jnla0ybqj"/></g>`,
		"fallback": "andrsrxn:coffee",
	});
}

export default Component;
