import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ajado-bbb.css';
import '../../css/k/k02fzkb_b.css';
import '../../css/r/r7lp1bc0o.css';
import '../../css/c/c2osk-a-j.css';
import '../../css/k/kloo_bcmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ajado-bbb"/><path class="k02fzkb_b wm-a"/><path class="r7lp1bc0o wm-a"/><path class="c2osk-a-j"/><path class="kloo_bcmp wm-a"/></g>`,
		"fallback": "withicons:ambulance-duo",
	});
}

export default Component;
