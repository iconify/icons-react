import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/czeiw6b4w.css';
import '../../css/u/u1ptbhbni.css';
import '../../css/s/sfrj7abtj.css';
import '../../css/s/shp0ei0kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="czeiw6b4w"/><path class="u1ptbhbni"/><path class="sfrj7abtj"/><path class="shp0ei0kf"/></g>`,
		"fallback": "solar:chart-linear",
	});
}

export default Component;
