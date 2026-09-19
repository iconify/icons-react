import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-9fldx0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a-9fldx0m"/>`,
		"fallback": "heroicons:arrow-trending-up-solid",
	});
}

export default Component;
