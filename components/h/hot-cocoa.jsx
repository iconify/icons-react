import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pf_k1dbuk.css';
import '../../css/z/zky4zm5fw.css';
import '../../css/o/or06vwbgm.css';
import '../../css/z/zwdjupehy.css';
import '../../css/r/rh3n02bpi.css';
import '../../css/w/wahc7nbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pf_k1dbuk wm-shadow"/><path class="zky4zm5fw"/><path class="or06vwbgm"/><path class="zwdjupehy"/><path class="rh3n02bpi"/><path class="wahc7nbdm wm-s"/></g>`,
		"fallback": "withicons-retro:hot-cocoa",
	});
}

export default Component;
