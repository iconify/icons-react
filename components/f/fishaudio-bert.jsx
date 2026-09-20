import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx5d-bc1s.css';
import '../../css/a/ak6y2c_dv.css';
import '../../css/m/mw_7fybnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nx5d-bc1s"><path class="ak6y2c_dv"/><path class="mw_7fybnk"/></g>`,
		"fallback": "thesvg-color:fishaudio-bert",
	});
}

export default Component;
