import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hphpo6bpz.css';
import '../../css/h/h-1moccon.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hphpo6bpz"/><path class="h-1moccon ouiIcon__fillSecondary"/></g>`,
		"fallback": "oui:app-pipeline",
	});
}

export default Component;
