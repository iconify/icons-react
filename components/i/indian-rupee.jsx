import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk1fkeb8a.css';
import '../../css/d/dckoivbei.css';
import '../../css/e/etmwy_fbm.css';
import '../../css/u/ur5-oweuc.css';
import '../../css/n/nu2ysbcwb.css';
import '../../css/c/cht62wbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pk1fkeb8a wm-shadow"/><path class="dckoivbei wm-k"/><path class="etmwy_fbm wm-k"/><path class="ur5-oweuc wm-k"/><path class="nu2ysbcwb wm-k"/><path class="cht62wbsw wm-shine"/></g>`,
		"fallback": "withicons-coquette:indian-rupee",
	});
}

export default Component;
