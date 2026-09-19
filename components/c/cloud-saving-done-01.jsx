import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtma55bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtma55bwe"/>`,
		"fallback": "hugeicons:cloud-saving-done-01",
	});
}

export default Component;
