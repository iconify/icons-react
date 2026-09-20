import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j_1c6xj2c.css';
import '../../css/q/qbypq5_fu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="j_1c6xj2c"/><path class="qbypq5_fu"/></g>`,
		"fallback": "marketeq:hastag",
	});
}

export default Component;
