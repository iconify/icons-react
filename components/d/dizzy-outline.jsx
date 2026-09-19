import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f67w_d5_u.css';
import '../../css/h/hxhk5ccjp.css';
import '../../css/w/wvxwsc-vy.css';
import '../../css/y/yjkgmbcuu.css';
import '../../css/m/m1kl32blo.css';
import '../../css/z/zt1e34j_a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f67w_d5_u"/><path class="hxhk5ccjp"/><path clip-rule="evenodd" class="wvxwsc-vy"/><path clip-rule="evenodd" class="yjkgmbcuu"/><path class="m1kl32blo"/><path clip-rule="evenodd" class="zt1e34j_a"/></g>`,
		"fallback": "glyphs:dizzy-outline",
	});
}

export default Component;
