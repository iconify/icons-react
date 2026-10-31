import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/undzao_xq.css';
import '../../css/t/tm_fh2w2u.css';
import '../../css/j/jviy2sb4z.css';
import '../../css/u/uooj9_soa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="undzao_xq"/><path class="tm_fh2w2u wm-shine"/><path class="jviy2sb4z"/><path class="uooj9_soa wm-deco"/></g>`,
		"fallback": "withicons-kawaii:avatar-dino",
	});
}

export default Component;
