import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-vkd2r7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-vkd2r7x"/>`,
		"fallback": "vadivam:circle-off",
	});
}

export default Component;
