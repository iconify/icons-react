import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pbp8ucood.css';
import '../../css/r/rzzwgey-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pbp8ucood"/><path class="rzzwgey-a"/></g>`,
		"fallback": "tdesign:gesture-left",
	});
}

export default Component;
