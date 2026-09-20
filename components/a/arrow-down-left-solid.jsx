import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kngvdccbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kngvdccbg"/>`,
		"fallback": "mynaui:arrow-down-left-solid",
	});
}

export default Component;
