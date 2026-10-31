import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b57totb9w.css';
import '../../css/l/lhufifbtm.css';
import '../../css/o/o2-hdlffi.css';
import '../../css/m/mxlqdwbyk.css';
import '../../css/g/gffdzobgp.css';
import '../../css/a/a-9q-5vhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b57totb9w wm-shadow"/><path class="lhufifbtm"/><path class="o2-hdlffi"/><path class="mxlqdwbyk"/><path class="gffdzobgp"/><path class="a-9q-5vhv"/></g>`,
		"fallback": "withicons-retro:donut",
	});
}

export default Component;
