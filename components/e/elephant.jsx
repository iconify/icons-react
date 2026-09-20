import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idyt3mb2g.css';
import '../../css/m/m_grtzbhg.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/dh9ai_bnx.css';
import '../../css/h/hkw9obv5y.css';
import '../../css/u/u1cbtpvhw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idyt3mb2g"/><path class="m_grtzbhg"/><g class="jn8qy4bru"><path class="dh9ai_bnx"/><path class="hkw9obv5y"/><path class="u1cbtpvhw"/></g>`,
		"fallback": "openmoji:elephant",
	});
}

export default Component;
