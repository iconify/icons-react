import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/igo3-bc7k.css';
import '../../css/d/dszcvgboc.css';
import '../../css/x/x-n4o_but.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="igo3-bc7k"/><path class="dszcvgboc"/><path class="x-n4o_but"/></g>`,
		"fallback": "marketeq:helicopter",
	});
}

export default Component;
