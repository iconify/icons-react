import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u42z6638m.css';
import '../../css/z/zy_ves9iz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="u42z6638m"/><path class="zy_ves9iz"/></g>`,
		"fallback": "garden:check-box-double-stroke-12",
	});
}

export default Component;
