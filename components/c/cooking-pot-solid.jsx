import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytzz9x6wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytzz9x6wa"/>`,
		"fallback": "iconaut:cooking-pot-solid",
	});
}

export default Component;
