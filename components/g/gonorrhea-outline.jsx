import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjylen1rs.css';
import '../../css/h/hvd6d7brl.css';
import '../../css/w/walgkl0pe.css';
import '../../css/m/mcjgljl4z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjylen1rs"/><path clip-rule="evenodd" class="hvd6d7brl"/><path class="walgkl0pe"/><path clip-rule="evenodd" class="mcjgljl4z"/></g>`,
		"fallback": "healthicons:gonorrhea-outline",
	});
}

export default Component;
