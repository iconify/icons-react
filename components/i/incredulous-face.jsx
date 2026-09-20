import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c479rxbrg.css';
import '../../css/h/huuajhmrh.css';
import '../../css/v/voy5q6rji.css';
import '../../css/n/nc8kacb-k.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c479rxbrg"/><circle class="huuajhmrh"/><path class="voy5q6rji"/><path class="nc8kacb-k"/><path class="tdhzq11dq"/>`,
		"fallback": "openmoji:incredulous-face",
	});
}

export default Component;
