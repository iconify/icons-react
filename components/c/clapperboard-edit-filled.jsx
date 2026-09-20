import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ajvky0bsy.css';
import '../../css/g/g1jyq1e1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ajvky0bsy"/><path clip-rule="evenodd" class="g1jyq1e1a"/></g>`,
		"fallback": "reicon:clapperboard-edit-filled",
	});
}

export default Component;
