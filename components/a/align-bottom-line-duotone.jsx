import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ck-crre5h.css';
import '../../css/l/l62d9fwog.css';
import '../../css/b/bz0iknbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ck-crre5h"/><path class="l62d9fwog"/><path class="bz0iknbec"/></g>`,
		"fallback": "solar:align-bottom-line-duotone",
	});
}

export default Component;
