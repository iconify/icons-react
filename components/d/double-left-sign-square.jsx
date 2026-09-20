import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/w4d-1663g.css';
import '../../css/r/rqt1yszvy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="w4d-1663g"/><path class="rqt1yszvy"/></g>`,
		"fallback": "marketeq:double-left-sign-square",
	});
}

export default Component;
