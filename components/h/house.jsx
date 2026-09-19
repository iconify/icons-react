import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2m90iw3t.css';
import '../../css/m/mh62rsbhy.css';
import '../../css/m/mbatq-3nh.css';
import '../../css/a/a5yg05b5s.css';
import '../../css/q/q0zx-nbkv.css';
import '../../css/w/w_cl1dv_p.css';
import '../../css/h/h06fmhbql.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b2m90iw3t"/><path class="mh62rsbhy"/><path class="mbatq-3nh"/><path class="a5yg05b5s"/><path class="q0zx-nbkv"/><path class="w_cl1dv_p"/><path class="h06fmhbql"/></g>`,
		"fallback": "fluent-emoji-flat:house",
	});
}

export default Component;
