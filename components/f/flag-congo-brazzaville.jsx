import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/s/s0zsy9ict.css';
import '../../css/b/bhggb2bgw.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="s0zsy9ict"/><path class="bhggb2bgw"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-congo-brazzaville",
	});
}

export default Component;
