import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/aoxplkb_u.css';
import '../../css/v/vu9d_bpoq.css';
import '../../css/k/k6q1i4brf.css';
import '../../css/p/pnrbgxb5c.css';
import '../../css/m/mrkqmab9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="aoxplkb_u"/><path class="vu9d_bpoq wm-shine"/><path class="k6q1i4brf wm-k"/><path class="pnrbgxb5c wm-a"/><path class="mrkqmab9s wm-deco"/></g>`,
		"fallback": "withicons-kawaii:broom",
	});
}

export default Component;
