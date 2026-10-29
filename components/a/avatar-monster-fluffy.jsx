import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jnag0bcrf.css';
import '../../css/f/faxfr4biv.css';
import '../../css/q/qn9718sum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jnag0bcrf"/><path class="faxfr4biv"/><path class="qn9718sum"/></g>`,
		"fallback": "withicons-bauhaus:avatar-monster-fluffy",
	});
}

export default Component;
