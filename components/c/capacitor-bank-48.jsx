import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7nffvb-a.css';
import '../../css/h/hj3x1bcjz.css';
import '../../css/g/gt-w3fb8s.css';
import '../../css/a/ahp82hb5r.css';
import '../../css/w/wy0uslpur.css';
import '../../css/j/jmk99nb6d.css';
import '../../css/y/ynm3pg6jn.css';
import '../../css/x/xrsi006sg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7nffvb-a"/><path class="hj3x1bcjz"/><path class="gt-w3fb8s"/><path class="ahp82hb5r"/><path class="wy0uslpur"/><path class="jmk99nb6d"/><path class="ynm3pg6jn"/><path class="xrsi006sg"/>`,
		"fallback": "energy-icons:capacitor-bank-48",
	});
}

export default Component;
