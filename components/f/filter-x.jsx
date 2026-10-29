import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t8j30dbrd.css';
import '../../css/c/cesv1tf_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t8j30dbrd wm-k"/><path class="cesv1tf_n wm-s"/></g>`,
		"fallback": "withicons-bauhaus:filter-x",
	});
}

export default Component;
