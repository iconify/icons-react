import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xj9aiubci.css';
import '../../css/c/cht9ek43g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xj9aiubci"/><path class="cht9ek43g"/></g>`,
		"fallback": "keyline-icons:caret-up-sharp-two-tone",
	});
}

export default Component;
