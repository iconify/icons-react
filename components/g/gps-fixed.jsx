import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/d-enzo4yk.css';
import '../../css/x/xnh8vsbav.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="d-enzo4yk"/><path class="xnh8vsbav"/></g>`,
		"fallback": "marketeq:gps-fixed",
	});
}

export default Component;
