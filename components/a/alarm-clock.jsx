import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-8ysebdp.css';
import '../../css/g/gfcjjsoqo.css';
import '../../css/g/gwfsmlgay.css';
import '../../css/o/oocvxym7f.css';
import '../../css/h/hu4mifblk.css';
import '../../css/p/pagrukb1j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k-8ysebdp"/><path class="gfcjjsoqo"/><path class="gwfsmlgay"/><path class="oocvxym7f"/><path class="hu4mifblk"/><path class="pagrukb1j"/></g>`,
		"fallback": "fluent-emoji-flat:alarm-clock",
	});
}

export default Component;
