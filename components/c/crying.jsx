import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6x5n2gml.css';
import '../../css/y/ye0q29qvd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t6x5n2gml"/><path class="ye0q29qvd"/></g>`,
		"fallback": "healthicons:crying",
	});
}

export default Component;
