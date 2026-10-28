import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/f/f4q24bcue.css';
import '../../css/p/ped8-delv.css';
import '../../css/v/v-k6d2bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><ellipse class="f4q24bcue"/><path class="ped8-delv"/><path class="v-k6d2bpu"/></g>`,
		"fallback": "codex:database",
	});
}

export default Component;
