import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fyw8szbhw.css';
import '../../css/o/o4k84obeb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fyw8szbhw"/><path class="o4k84obeb"/></g>`,
		"fallback": "bi:door-open",
	});
}

export default Component;
