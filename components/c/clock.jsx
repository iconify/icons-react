import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3w_t7krg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3w_t7krg"/>`,
		"fallback": "dashicons:clock",
	});
}

export default Component;
