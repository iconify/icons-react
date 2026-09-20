import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e0f2r-bbe.css';
import '../../css/t/t36r5ab8c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="e0f2r-bbe"/><path class="t36r5ab8c"/></g>`,
		"fallback": "marketeq:export-2",
	});
}

export default Component;
