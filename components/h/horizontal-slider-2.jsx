import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uimtm7b2j.css';
import '../../css/y/yskd8hpib.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uimtm7b2j"/><path class="yskd8hpib"/></g>`,
		"fallback": "streamline-flex-color:horizontal-slider-2",
	});
}

export default Component;
