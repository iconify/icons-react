import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/psob7xbsm.css';
import '../../css/f/f2ak7-5gi.css';
import '../../css/o/on0ts-5zi.css';
import '../../css/c/coff_0a1c.css';
import '../../css/x/x9y218bfr.css';
import '../../css/x/xc_je6bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="psob7xbsm"/><path class="f2ak7-5gi"/><path class="on0ts-5zi wm-shine"/><path class="coff_0a1c wm-k"/><path class="wm-a x9y218bfr"/><path class="wm-deco xc_je6bwo"/></g>`,
		"fallback": "withicons-kawaii:address-book",
	});
}

export default Component;
