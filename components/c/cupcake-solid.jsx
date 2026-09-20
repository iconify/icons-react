import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_2k7vlvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_2k7vlvz"/>`,
		"fallback": "mynaui:cupcake-solid",
	});
}

export default Component;
