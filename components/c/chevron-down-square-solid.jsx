import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs81t-brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs81t-brs"/>`,
		"fallback": "mynaui:chevron-down-square-solid",
	});
}

export default Component;
