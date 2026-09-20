import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujsvi_jxa.css';
import '../../css/v/vy13rub1w.css';
import '../../css/w/wvet0xspw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ujsvi_jxa"/><path class="vy13rub1w"/><path class="wvet0xspw"/></g>`,
		"fallback": "tdesign:forum",
	});
}

export default Component;
