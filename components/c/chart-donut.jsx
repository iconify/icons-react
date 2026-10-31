import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z2_qi4bgh.css';
import '../../css/n/n91vfzbdh.css';
import '../../css/u/u14jpn2xx.css';
import '../../css/s/s5jeuhhzk.css';
import '../../css/e/ek3_anb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow z2_qi4bgh"/><path class="n91vfzbdh wm-shadow"/><path class="u14jpn2xx"/><path class="s5jeuhhzk"/><path class="ek3_anb4p"/></g>`,
		"fallback": "withicons-brutal:chart-donut",
	});
}

export default Component;
