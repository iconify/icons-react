import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kg2tn5b5e.css';
import '../../css/a/axrmuibbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kg2tn5b5e"/><path class="axrmuibbf"/></g>`,
		"fallback": "withicons-bauhaus:baby-bottle",
	});
}

export default Component;
