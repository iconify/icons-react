import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vq6uo5d_c.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/so7639bqv.css';
import '../../css/g/g44-llb9y.css';
import '../../css/e/e76u3_zod.css';
import '../../css/b/b2c_rybmh.css';
import '../../css/q/qkvqao88p.css';
import '../../css/q/qp2no6bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vq6uo5d_c wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="so7639bqv wm-k"/><path class="g44-llb9y wm-a"/><circle class="e76u3_zod wm-a"/><circle class="b2c_rybmh wm-a"/><circle class="qkvqao88p wm-a"/><circle class="qp2no6bkc wm-a"/></g>`,
		"fallback": "withicons:circuit-board-blueprint",
	});
}

export default Component;
