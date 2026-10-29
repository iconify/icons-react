import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g103_zmlj.css';
import '../../css/z/zoljnur1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g103_zmlj wm-k"/><path class="wm-a zoljnur1g"/></g>`,
		"fallback": "withicons-bauhaus:axe",
	});
}

export default Component;
