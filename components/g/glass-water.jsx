import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wsnbx43bh.css';
import '../../css/l/l5fxb5bua.css';
import '../../css/i/ifhrgsbyx.css';
import '../../css/v/vr9r16gkx.css';
import '../../css/b/bu02ix8uv.css';
import '../../css/q/q5gt8facg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k wsnbx43bh"/><path class="l5fxb5bua wm-k"/><path class="ifhrgsbyx wm-k"/><path class="vr9r16gkx wm-k"/><path class="bu02ix8uv wm-shine"/><path class="q5gt8facg wm-a"/></g>`,
		"fallback": "withicons-anime:glass-water",
	});
}

export default Component;
