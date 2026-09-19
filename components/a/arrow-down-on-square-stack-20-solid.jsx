import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d81yw8b_i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d81yw8b_i"/>`,
		"fallback": "heroicons:arrow-down-on-square-stack-20-solid",
	});
}

export default Component;
