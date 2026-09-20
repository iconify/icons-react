import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e2ipfhhai.css';
import '../../css/v/vr7yxqblp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="e2ipfhhai"/><path class="vr7yxqblp"/></g>`,
		"fallback": "marketeq:earphone-bluetooth",
	});
}

export default Component;
