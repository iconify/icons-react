import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ylhx5jbuy.css';
import '../../css/k/kp6x66biy.css';
import '../../css/r/rp-5i7zrq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ylhx5jbuy"/><path class="kp6x66biy"/><path class="rp-5i7zrq"/></g>`,
		"fallback": "glyphs:bike",
	});
}

export default Component;
