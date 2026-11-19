import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/reazo4b-i.css';
import '../../css/v/vej1ycywr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="reazo4b-i"/><path class="vej1ycywr"/></g>`,
		"fallback": "andrsrxn:bowl",
	});
}

export default Component;
