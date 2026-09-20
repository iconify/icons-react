import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enq9vkb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enq9vkb5j"/>`,
		"fallback": "mynaui:flag-one",
	});
}

export default Component;
