import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e9sm96mzw.css';
import '../../css/q/q3jeqcodb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e9sm96mzw"/><path clip-rule="evenodd" class="q3jeqcodb"/></g>`,
		"fallback": "healthicons:baby-formula",
	});
}

export default Component;
