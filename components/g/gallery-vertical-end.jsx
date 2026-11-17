import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/uc7uzkbwa.css';
import '../../css/u/u05znbefx.css';
import '../../css/n/nbimxkbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="uc7uzkbwa"/><path class="u05znbefx"/><path class="nbimxkbcq"/></g>`,
		"fallback": "matita:gallery-vertical-end",
	});
}

export default Component;
