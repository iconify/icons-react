import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc5eqrbuf.css';
import '../../css/l/ld5if1xzh.css';
import '../../css/o/o6imnm4pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc5eqrbuf"/><path class="ld5if1xzh"/><path class="o6imnm4pl"/>`,
		"fallback": "solar:hamburger-menu-outline",
	});
}

export default Component;
