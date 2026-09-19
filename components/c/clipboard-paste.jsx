import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rsg-wmbbd.css';
import '../../css/x/x8_ephbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rsg-wmbbd"/><path class="x8_ephbyq"/></g>`,
		"fallback": "hugeicons:clipboard-paste",
	});
}

export default Component;
