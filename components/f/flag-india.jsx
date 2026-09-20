import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/a/akn0umbll.css';
import '../../css/r/r73utib8z.css';
import '../../css/f/f3wnm8bqo.css';
import '../../css/b/bx8wy4b0r.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="akn0umbll"/><path class="r73utib8z"/><path class="f3wnm8bqo"/><circle class="bx8wy4b0r"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-india",
	});
}

export default Component;
