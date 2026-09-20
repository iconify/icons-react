import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/r/r73utib8z.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/s/s__9l0bok.css';
import '../../css/a/a2r_2abvt.css';
import '../../css/u/u1nrsybzr.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="r73utib8z"/><path class="u9hq09b6k"/><path class="s__9l0bok"/><path class="a2r_2abvt"/><path class="u1nrsybzr"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-western-sahara",
	});
}

export default Component;
