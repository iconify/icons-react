import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wu9ajoqpc.css';
import '../../css/e/eq0evh2wi.css';
import '../../css/w/wkd69f43m.css';

const viewBox = {"width":108,"height":63};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wu9ajoqpc"/><path clip-rule="evenodd" class="eq0evh2wi"/><path class="wkd69f43m"/></g>`,
		"fallback": "healthicons:baby-male-0203m-alt",
	});
}

export default Component;
