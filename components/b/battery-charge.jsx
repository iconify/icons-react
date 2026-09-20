import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/ptlp1gbiy.css';
import '../../css/d/d9ofjtyju.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ptlp1gbiy"/><path class="d9ofjtyju"/></g>`,
		"fallback": "marketeq:battery-charge",
	});
}

export default Component;
