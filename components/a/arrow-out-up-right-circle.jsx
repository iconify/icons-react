import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxyrztbdj.css';
import '../../css/h/h2egwczhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxyrztbdj"/><path class="h2egwczhc"/>`,
		"fallback": "boxicons:arrow-out-up-right-circle",
	});
}

export default Component;
