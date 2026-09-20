import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/b2v261bqj.css';
import '../../css/t/twu97bc7j.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="b2v261bqj"/><path class="twu97bc7j"/></g>`,
		"fallback": "marketeq:bathtub-3",
	});
}

export default Component;
