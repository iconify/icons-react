import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4sljnbul.css';
import '../../css/h/hwbad23cb.css';
import '../../css/c/c-3m_b4or.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4sljnbul"/><path class="hwbad23cb"/><path class="c-3m_b4or"/>`,
		"fallback": "openmoji:filter",
	});
}

export default Component;
