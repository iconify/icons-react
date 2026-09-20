import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jso8w6qel.css';
import '../../css/g/gun2jeb_g.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jso8w6qel"/><path class="gun2jeb_g"/></g>`,
		"fallback": "marketeq:diskette",
	});
}

export default Component;
