import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc3gm6bnq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pc3gm6bnq"/>`,
		"fallback": "heroicons-solid:arrow-right",
	});
}

export default Component;
