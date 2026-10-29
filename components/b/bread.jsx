import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z-08djhti.css';
import '../../css/y/ykbasgb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="z-08djhti"/><path class="ykbasgb5t"/></g>`,
		"fallback": "withicons-bauhaus:bread",
	});
}

export default Component;
