import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/rnj8kfblz.css';
import '../../css/h/hjj0q8d7v.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="rnj8kfblz"/><path class="hjj0q8d7v"/></g>`,
		"fallback": "marketeq:file-favorite-8",
	});
}

export default Component;
