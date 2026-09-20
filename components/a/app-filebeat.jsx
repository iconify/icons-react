import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ln1kbbbbo.css';
import '../../css/y/yef3849lj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ln1kbbbbo ouiIcon__fillSecondary"/><path class="yef3849lj"/></g>`,
		"fallback": "oui:app-filebeat",
	});
}

export default Component;
