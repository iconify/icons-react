import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e5s5re2ex.css';
import '../../css/c/cm6xdqnil.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e5s5re2ex"/><path class="cm6xdqnil"/></g>`,
		"fallback": "pullo:clipboard-check-duotone",
	});
}

export default Component;
