import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x161jlf-f.css';
import '../../css/g/g7777bb0y.css';
import '../../css/z/z8cuebffl.css';
import '../../css/x/x-me61blo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x161jlf-f"/><path clip-rule="evenodd" class="g7777bb0y"/><path class="z8cuebffl"/><path clip-rule="evenodd" class="x-me61blo"/></g>`,
		"fallback": "healthicons:cancerous-cell-nuclei",
	});
}

export default Component;
