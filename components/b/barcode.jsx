import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rb489q91j.css';
import '../../css/a/a3_t2lble.css';
import '../../css/m/m91zsqt9q.css';
import '../../css/q/q33dvrbry.css';
import '../../css/k/kt1a7_gyd.css';
import '../../css/w/w6p0p2kwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="rb489q91j wm-shadow"/><path class="a3_t2lble"/><path class="m91zsqt9q"/><path class="q33dvrbry"/><path class="kt1a7_gyd wm-shine"/><path class="w6p0p2kwt wm-deco"/></g>`,
		"fallback": "withicons-sticker:barcode",
	});
}

export default Component;
