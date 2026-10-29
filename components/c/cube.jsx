import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kzy6w_8gl.css';
import '../../css/i/iifq1wiff.css';
import '../../css/f/fx574gdjn.css';
import '../../css/a/a6xbw-q1y.css';
import '../../css/y/y2xpdbc7j.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="kzy6w_8gl wm-shadow"/><path class="iifq1wiff"/><path class="fx574gdjn"/><path class="a6xbw-q1y"/><path class="wm-shine y2xpdbc7j"/><path class="ug799plhe wm-deco"/></g>`,
		"fallback": "withicons-sticker:cube",
	});
}

export default Component;
