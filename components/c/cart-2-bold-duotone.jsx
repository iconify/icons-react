import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/me44qacwj.css';
import '../../css/f/fpb37bc7d.css';
import '../../css/r/r0kfjhb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="me44qacwj"/><path class="fpb37bc7d"/></g><path clip-rule="evenodd" class="r0kfjhb-d"/>`,
		"fallback": "solar:cart-2-bold-duotone",
	});
}

export default Component;
