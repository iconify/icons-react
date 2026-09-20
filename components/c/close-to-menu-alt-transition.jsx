import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/b/bu0ohj.css';
import '../../css/l/l3-heb.css';
import '../../css/d/d-wzkz9p.css';
import '../../css/d/d-szjhyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c bu0ohj"/><path class="a0m25c l3-heb"/>`,
		"fallback": "line-md:close-to-menu-alt-transition",
	});
}

export default Component;
