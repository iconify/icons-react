import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mokpvmbch.css';
import '../../css/k/ki6jfibdu.css';
import '../../css/k/kt8eunb4u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mokpvmbch"/><path class="ki6jfibdu"/><path class="kt8eunb4u"/></g>`,
		"fallback": "glyphs:campfire-bold",
	});
}

export default Component;
