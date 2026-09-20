import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fwn8pmily.css';
import '../../css/b/bjelf9h6e.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="fwn8pmily"/><path class="bjelf9h6e"/></g>`,
		"fallback": "marketeq:appartment-2",
	});
}

export default Component;
