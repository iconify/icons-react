import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4y6mmu1p.css';
import '../../css/r/rc6lwuj7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer r4y6mmu1p"/><path class="duoicon-primary-layer rc6lwuj7v"/>`,
		"fallback": "duo-icons:align-bottom",
	});
}

export default Component;
