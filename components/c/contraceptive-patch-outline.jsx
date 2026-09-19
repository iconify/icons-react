import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kiaki0bgb.css';
import '../../css/t/t-lnjbcre.css';
import '../../css/g/g4sr6mdva.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kiaki0bgb"/><path clip-rule="evenodd" class="t-lnjbcre"/><path class="g4sr6mdva"/></g>`,
		"fallback": "healthicons:contraceptive-patch-outline",
	});
}

export default Component;
