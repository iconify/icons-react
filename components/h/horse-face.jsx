import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v0hjvxsib.css';
import '../../css/x/xw5b4oyqf.css';
import '../../css/l/l-afxsb-q.css';
import '../../css/s/sx3p9ubrj.css';
import '../../css/w/w_kwowb-h.css';
import '../../css/m/mqjc45bdq.css';
import '../../css/j/jupyncbtt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v0hjvxsib"/><path class="xw5b4oyqf"/><path class="l-afxsb-q"/><path class="sx3p9ubrj"/><path class="w_kwowb-h"/><path class="mqjc45bdq"/><path class="jupyncbtt"/></g>`,
		"fallback": "fluent-emoji-flat:horse-face",
	});
}

export default Component;
