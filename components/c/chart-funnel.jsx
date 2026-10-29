import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b6aghm9bs.css';
import '../../css/z/zbonqtbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b6aghm9bs"/><path class="zbonqtbjr"/></g>`,
		"fallback": "withicons-bauhaus:chart-funnel",
	});
}

export default Component;
