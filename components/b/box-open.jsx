import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
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
		"content": `<g class="flen3tbdj"><path class="zvdwr1bxm"/><path class="ej8z41bas"/></g>`,
		"fallback": "lets-icons:box-open",
	});
}

export default Component;
