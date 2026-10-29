import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bet4b7kiy.css';
import '../../css/f/f7iatl43t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bet4b7kiy"/><path class="f7iatl43t"/></g>`,
		"fallback": "withicons-bauhaus:crayon",
	});
}

export default Component;
