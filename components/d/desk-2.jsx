import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/p7yqnwbor.css';
import '../../css/v/vv7nwxbag.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="p7yqnwbor"/><path class="vv7nwxbag"/></g>`,
		"fallback": "marketeq:desk-2",
	});
}

export default Component;
