import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/b/b778kib9g.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/s/s__9l0bok.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="b778kib9g"/><path class="u9hq09b6k"/><path class="s__9l0bok"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-palestinian-territories",
	});
}

export default Component;
