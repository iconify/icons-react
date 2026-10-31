import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bccip5bwi.css';
import '../../css/f/fadplwb6f.css';
import '../../css/m/mhu84h7pt.css';
import '../../css/e/epbh144fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bccip5bwi wm-shadow"/><path class="fadplwb6f wm-shadow"/><path class="mhu84h7pt"/><path class="epbh144fv"/></g>`,
		"fallback": "withicons-brutal:contrast",
	});
}

export default Component;
