import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kj9_a1baz.css';
import '../../css/w/wql4qabcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kj9_a1baz"/><path class="wql4qabcb"/></g>`,
		"fallback": "withicons-bauhaus:coffin",
	});
}

export default Component;
