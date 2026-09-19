import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mj8e0tb8h.css';
import '../../css/k/k4t_b26wt.css';
import '../../css/h/h4j1qqb0s.css';
import '../../css/u/ujs50evnf.css';
import '../../css/w/wke4mllrz.css';
import '../../css/i/im7vlew_v.css';
import '../../css/g/gm2tf6a2t.css';
import '../../css/l/lez4j58ec.css';
import '../../css/x/xbdh0pbxi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mj8e0tb8h"/><path clip-rule="evenodd" class="k4t_b26wt"/><path class="h4j1qqb0s"/><path clip-rule="evenodd" class="ujs50evnf"/><path class="wke4mllrz"/><path clip-rule="evenodd" class="im7vlew_v"/><path clip-rule="evenodd" class="gm2tf6a2t"/><path class="lez4j58ec"/><path clip-rule="evenodd" class="xbdh0pbxi"/></g>`,
		"fallback": "glyphs:foot-print-outline",
	});
}

export default Component;
