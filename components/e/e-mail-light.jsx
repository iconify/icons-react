import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/da4x8hbcl.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/m/mzgzwghgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="da4x8hbcl"/><circle class="aqhok2bbj"/><path class="mzgzwghgb"/></g>`,
		"fallback": "lets-icons:e-mail-light",
	});
}

export default Component;
