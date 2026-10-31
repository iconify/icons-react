import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lucauldwf.css';
import '../../css/y/y9kjc6bfx.css';
import '../../css/a/a2ai9tcjf.css';
import '../../css/l/lgrei8-mr.css';
import '../../css/e/ews49cctm.css';
import '../../css/l/l-fs14mhk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="lucauldwf"/><path class="y9kjc6bfx"/><path class="a2ai9tcjf"/><path class="lgrei8-mr"/><path class="ews49cctm"/><path class="l-fs14mhk"/></g>`,
		"fallback": "iconito:cucumber",
	});
}

export default Component;
