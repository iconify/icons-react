import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
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
		"content": `<g class="n1lsf0bnc"><path class="ak6y2c_dv"/><path class="mw_7fybnk"/></g>`,
		"fallback": "thesvg:fishaudio-bert",
	});
}

export default Component;
