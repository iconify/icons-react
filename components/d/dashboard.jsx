import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj7v0vbun.css';
import '../../css/i/i28xa4bkq.css';
import '../../css/f/fli27abct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer fj7v0vbun"/><path class="duoicon-primary-layer i28xa4bkq"/><path class="duoicon-secondary-layer fli27abct"/>`,
		"fallback": "duo-icons:dashboard",
	});
}

export default Component;
