import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5k2-3dhg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5k2-3dhg"/>`,
		"fallback": "memory:arrow-down-bold",
	});
}

export default Component;
