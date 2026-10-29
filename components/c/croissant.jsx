import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chyz9hx-t.css';
import '../../css/u/uw6od76wc.css';
import '../../css/y/yjp-fdb4i.css';
import '../../css/n/nrkmvhwwj.css';
import '../../css/w/wcsi8pbqh.css';
import '../../css/h/hm13dx3kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="chyz9hx-t wm-k"/><path class="uw6od76wc wm-k"/><path class="wm-k yjp-fdb4i"/><path class="nrkmvhwwj wm-k"/><path class="wcsi8pbqh wm-shine"/><path class="hm13dx3kc wm-a"/></g>`,
		"fallback": "withicons-anime:croissant",
	});
}

export default Component;
