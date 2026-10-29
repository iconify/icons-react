import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bmk8z0bah.css';
import '../../css/p/p2gwa5lhn.css';
import '../../css/d/dmbh9qbiz.css';
import '../../css/r/r_5x2fgpt.css';
import '../../css/a/ar8po3b0p.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="bmk8z0bah wm-shadow"/><path class="p2gwa5lhn"/><path class="dmbh9qbiz"/><path class="r_5x2fgpt"/><path class="ar8po3b0p wm-shine"/><path class="kn-1y6pge wm-deco"/></g>`,
		"fallback": "withicons-sticker:dollar-sign",
	});
}

export default Component;
