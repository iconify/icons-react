import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rt5kw-70y.css';
import '../../css/s/sjz3iqbld.css';
import '../../css/h/hld25s7pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rt5kw-70y"/><path class="sjz3iqbld"/><path class="hld25s7pw"/></g>`,
		"fallback": "hugeicons:bread-02",
	});
}

export default Component;
