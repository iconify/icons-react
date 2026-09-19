import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gej5qbeik.css';
import '../../css/o/oaf-ekb5m.css';
import '../../css/q/qawp00bnx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gej5qbeik"><path class="oaf-ekb5m"/><path class="qawp00bnx"/></g>`,
		"fallback": "catppuccin:code-of-conduct",
	});
}

export default Component;
