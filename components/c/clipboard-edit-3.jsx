import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gfeblsb2v.css';
import '../../css/j/jwpqpbcgn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="gfeblsb2v"/><path class="jwpqpbcgn"/></g>`,
		"fallback": "marketeq:clipboard-edit-3",
	});
}

export default Component;
