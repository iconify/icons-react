import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/t3ptiyb3f.css';
import '../../css/w/wky5h3byu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="t3ptiyb3f"/><path class="wky5h3byu"/></g>`,
		"fallback": "marketeq:check-mark-circle",
	});
}

export default Component;
