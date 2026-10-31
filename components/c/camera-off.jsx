import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k0l633lzq.css';
import '../../css/k/ks996k63l.css';
import '../../css/z/z4dxnbbml.css';
import '../../css/y/yd1-_qbdi.css';
import '../../css/k/kajlvyf4t.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="k0l633lzq"/><path class="ks996k63l wm-shine"/><path class="wm-k z4dxnbbml"/><path class="wm-a yd1-_qbdi"/><path class="kajlvyf4t wm-s"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:camera-off",
	});
}

export default Component;
