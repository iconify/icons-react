import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eezel15us.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eezel15us"/>`,
		"fallback": "dashicons:controls-skipback",
	});
}

export default Component;
