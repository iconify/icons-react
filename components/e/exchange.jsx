import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/n5p6_nbue.css';
import '../../css/n/n5pdixbgq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="n5p6_nbue"/><path class="n5pdixbgq"/></g>`,
		"fallback": "marketeq:exchange",
	});
}

export default Component;
