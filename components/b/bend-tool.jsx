import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pyd8uurcz.css';
import '../../css/i/i7327t3bx.css';
import '../../css/g/gtqacwbfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="pyd8uurcz"/><circle class="i7327t3bx"/><path class="gtqacwbfg"/></g>`,
		"fallback": "hugeicons:bend-tool",
	});
}

export default Component;
