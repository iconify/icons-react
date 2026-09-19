import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h55xb4bob.css';
import '../../css/v/vtxvw3bnv.css';
import '../../css/o/ows-rgbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h55xb4bob"/><path class="vtxvw3bnv"/><path class="ows-rgbwf"/></g>`,
		"fallback": "hugeicons:gps-off-02",
	});
}

export default Component;
