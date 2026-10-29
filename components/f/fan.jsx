import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zpgwv8bay.css';
import '../../css/p/pnwvjdbeb.css';
import '../../css/a/axxpdcbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="zpgwv8bay"/><path class="pnwvjdbeb"/><path class="axxpdcbni"/></g>`,
		"fallback": "withicons-bauhaus:fan",
	});
}

export default Component;
