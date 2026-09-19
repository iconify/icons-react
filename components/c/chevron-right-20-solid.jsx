import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3290zb7w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x3290zb7w"/>`,
		"fallback": "heroicons:chevron-right-20-solid",
	});
}

export default Component;
