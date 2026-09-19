import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mr8v6_5kn.css';
import '../../css/u/uhfgxvb8v.css';
import '../../css/h/htbk-abbd.css';
import '../../css/x/xms4j1b0r.css';
import '../../css/r/rh3uwmbhz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mr8v6_5kn"/><path class="uhfgxvb8v"/><path class="htbk-abbd"/><path class="xms4j1b0r"/><path class="rh3uwmbhz"/></g>`,
		"fallback": "fluent-emoji-flat:face-with-medical-mask",
	});
}

export default Component;
