import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/b5ed61bny.css';
import '../../css/y/ypn4embnt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="b5ed61bny"/><path class="ypn4embnt"/></g>`,
		"fallback": "marketeq:birthday-cake",
	});
}

export default Component;
