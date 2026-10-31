import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/brvvkkb0y.css';
import '../../css/j/j27bccblr.css';
import '../../css/m/mqy27tbgb.css';
import '../../css/q/q-vbo8b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="brvvkkb0y wm-shadow"/><path class="j27bccblr wm-shadow"/><path class="mqy27tbgb"/><path class="q-vbo8b6v"/></g>`,
		"fallback": "withicons-brutal:diya",
	});
}

export default Component;
