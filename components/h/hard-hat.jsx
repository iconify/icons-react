import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xyv1xc2yo.css';
import '../../css/w/wybughb7e.css';
import '../../css/f/fg888oqwi.css';
import '../../css/m/mm-agpb9d.css';
import '../../css/z/zzhj-rjdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xyv1xc2yo"/><path class="wm-shadow wybughb7e"/><path class="fg888oqwi"/><path class="mm-agpb9d"/><path class="zzhj-rjdm"/></g>`,
		"fallback": "withicons-brutal:hard-hat",
	});
}

export default Component;
