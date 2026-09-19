import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/opab-pw4s.css';
import '../../css/h/hfrj-hbym.css';
import '../../css/l/lln7y71yy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="opab-pw4s"/><path class="hfrj-hbym"/><path class="lln7y71yy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ghost",
	});
}

export default Component;
