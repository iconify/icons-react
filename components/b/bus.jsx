import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nt8cfn36z.css';
import '../../css/k/k595yy0pm.css';
import '../../css/o/o2spa6xjz.css';
import '../../css/o/o91lir87a.css';
import '../../css/g/g5rufd2wr.css';
import '../../css/f/f8i91obgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nt8cfn36z wm-shadow"/><path class="k595yy0pm"/><path class="o2spa6xjz"/><path class="o91lir87a"/><path class="g5rufd2wr"/><path class="f8i91obgl"/></g>`,
		"fallback": "withicons-retro:bus",
	});
}

export default Component;
