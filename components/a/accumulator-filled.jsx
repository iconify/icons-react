import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eb2wkrbqz.css';
import '../../css/v/v70sv_b8n.css';
import '../../css/c/c41kgs53a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eb2wkrbqz"/><path class="v70sv_b8n"/><path clip-rule="evenodd" class="c41kgs53a"/></g>`,
		"fallback": "reicon:accumulator-filled",
	});
}

export default Component;
