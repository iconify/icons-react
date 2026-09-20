import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c7cpj85dq.css';
import '../../css/f/fgfn1dwmu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c7cpj85dq"/><path class="fgfn1dwmu"/></g>`,
		"fallback": "marketeq:earphone",
	});
}

export default Component;
