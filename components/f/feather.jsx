import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/homsdbwhd.css';
import '../../css/t/t1jnwgboo.css';
import '../../css/w/wv0ivsrrm.css';
import '../../css/u/ulw-1mb-v.css';
import '../../css/p/pid5ycb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="homsdbwhd"/><path class="t1jnwgboo wm-shine"/><path class="wm-k wv0ivsrrm"/><path class="ulw-1mb-v wm-a"/><path class="pid5ycb_v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:feather",
	});
}

export default Component;
