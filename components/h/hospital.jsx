import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jhi4u9hbk.css';
import '../../css/q/qr-0ynbwb.css';
import '../../css/j/j4nm59cjn.css';
import '../../css/z/zz7smbbbt.css';
import '../../css/v/vir2iib6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jhi4u9hbk"/><path class="qr-0ynbwb wm-shine"/><path class="j4nm59cjn wm-k"/><path class="wm-a zz7smbbbt"/><path class="vir2iib6z wm-deco"/></g>`,
		"fallback": "withicons-kawaii:hospital",
	});
}

export default Component;
