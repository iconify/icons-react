import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_3lq3b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_3lq3b8k"/>`,
		"fallback": "heroicons:arrow-right-circle-solid",
	});
}

export default Component;
