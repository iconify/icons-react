import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zvdwr1bxm.css';
import '../../css/e/ej8z41bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="zvdwr1bxm"/><path class="ej8z41bas"/></g>`,
		"fallback": "lets-icons:box-open-light",
	});
}

export default Component;
