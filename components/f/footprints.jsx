import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/js41ow7el.css';
import '../../css/z/z88l2pb9x.css';
import '../../css/j/jxr15ubel.css';
import '../../css/q/q9ph29bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="js41ow7el"/><path class="z88l2pb9x"/><path class="jxr15ubel"/><path class="q9ph29bne"/></g>`,
		"fallback": "matita:footprints",
	});
}

export default Component;
