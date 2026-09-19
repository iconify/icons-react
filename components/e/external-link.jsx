import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_qw5gr9p.css';
import '../../css/y/yrfreqb-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_qw5gr9p"/><path class="yrfreqb-s"/>`,
		"fallback": "cil:external-link",
	});
}

export default Component;
