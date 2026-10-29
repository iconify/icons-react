import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/ban8_0bod.css';
import '../../css/f/fnpjw3bbm.css';
import '../../css/e/elnpcezsu.css';
import '../../css/h/ha-6yibsf.css';
import '../../css/k/k26yyvc5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ban8_0bod wm-k"/><path class="fnpjw3bbm wm-a"/><path class="elnpcezsu wm-shadow"/><path class="ha-6yibsf wm-k"/><path class="k26yyvc5e wm-a"/></g>`,
		"fallback": "withicons:footprints-engrave",
	});
}

export default Component;
