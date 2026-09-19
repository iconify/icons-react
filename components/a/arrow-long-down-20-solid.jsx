import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq3duqbjl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wq3duqbjl"/>`,
		"fallback": "heroicons:arrow-long-down-20-solid",
	});
}

export default Component;
