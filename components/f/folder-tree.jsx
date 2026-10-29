import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g1uu0n5gk.css';
import '../../css/y/yxcd2-bjp.css';
import '../../css/u/uhzeogauj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g1uu0n5gk"/><path class="yxcd2-bjp"/><path class="uhzeogauj"/></g>`,
		"fallback": "withicons-bauhaus:folder-tree",
	});
}

export default Component;
