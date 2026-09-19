import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0nqyubyr.css';
import '../../css/e/e06raxbxf.css';
import '../../css/j/jcn5sbflp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d0nqyubyr"/><path clip-rule="evenodd" class="e06raxbxf"/><path class="jcn5sbflp"/></g>`,
		"fallback": "healthicons:chemical-burn",
	});
}

export default Component;
