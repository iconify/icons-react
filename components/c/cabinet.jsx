import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/sxnb1nwze.css';
import '../../css/h/h6cqb4bhd.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="sxnb1nwze"/><path class="h6cqb4bhd"/></g>`,
		"fallback": "marketeq:cabinet",
	});
}

export default Component;
