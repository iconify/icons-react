import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pyln21b0z.css';
import '../../css/p/pzrn709fu.css';
import '../../css/w/wruw12bjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pyln21b0z"/><path class="pzrn709fu"/><path clip-rule="evenodd" class="wruw12bjk"/></g>`,
		"fallback": "healthicons:diabetes-measure-outline",
	});
}

export default Component;
