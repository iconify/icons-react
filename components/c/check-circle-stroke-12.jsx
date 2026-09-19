import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/d4l60oblr.css';
import '../../css/u/uf8-wnb5o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="d4l60oblr"/><circle class="uf8-wnb5o"/></g>`,
		"fallback": "garden:check-circle-stroke-12",
	});
}

export default Component;
