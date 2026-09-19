import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t6v0tjbcy.css';
import '../../css/w/w912y4vfg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="t6v0tjbcy"/><path class="w912y4vfg"/></g>`,
		"fallback": "cryptocurrency-color:fldc",
	});
}

export default Component;
