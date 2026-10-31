import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hb4z9yj8x.css';
import '../../css/b/bo-ljc1md.css';
import '../../css/i/iy5c_d9ih.css';
import '../../css/x/xsqwk6bsh.css';
import '../../css/u/utk69mtxi.css';
import '../../css/y/yu9sii_3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="hb4z9yj8x"/><path class="bo-ljc1md wm-s"/><path class="iy5c_d9ih wm-shine"/><path class="wm-k xsqwk6bsh"/><path class="utk69mtxi wm-a"/><path class="wm-s yu9sii_3x"/></g>`,
		"fallback": "withicons-kawaii:christmas-candle",
	});
}

export default Component;
