import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/j4fs14bkv.css';
import '../../css/h/h7l9reb0f.css';
import '../../css/o/ot7ug_ubs.css';
import '../../css/e/e_jnf7h6d.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="j4fs14bkv"/><path class="h7l9reb0f wm-shine"/><path class="ot7ug_ubs wm-k"/><path class="e_jnf7h6d wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:croissant",
	});
}

export default Component;
