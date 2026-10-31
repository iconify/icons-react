import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qep9xl60h.css';
import '../../css/s/styg9zb6c.css';
import '../../css/l/lds3jnb_q.css';
import '../../css/y/yf2sk0dqd.css';
import '../../css/e/ez-zsmb0o.css';
import '../../css/x/x_s52ob7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qep9xl60h wm-k"/><path class="styg9zb6c wm-deco"/><path class="lds3jnb_q wm-k"/><path class="wm-k yf2sk0dqd"/><path class="ez-zsmb0o wm-shadow"/><path class="wm-shine x_s52ob7w"/></g>`,
		"fallback": "withicons-valentine:file-up",
	});
}

export default Component;
