import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgcjijb2g.css';
import '../../css/w/wbc3phs4w.css';
import '../../css/v/vpdzi0qwo.css';
import '../../css/i/ice5a2nwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgcjijb2g"/><path class="wbc3phs4w"/><path class="vpdzi0qwo"/><path class="ice5a2nwl"/></g>`,
		"fallback": "streamline-ultimate-color:house-4",
	});
}

export default Component;
