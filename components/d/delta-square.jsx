import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gnte9dbxl.css';
import '../../css/i/imstvac3c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="gnte9dbxl"/><path class="imstvac3c"/></g>`,
		"fallback": "marketeq:delta-square",
	});
}

export default Component;
