import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emvwi1bcs.css';
import '../../css/f/f-3_hbcnj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emvwi1bcs"/><path class="f-3_hbcnj"/>`,
		"fallback": "energy-icons:arrow-left-to-line-20-bold",
	});
}

export default Component;
