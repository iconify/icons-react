import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvn4u4bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvn4u4bew"/>`,
		"fallback": "hugeicons:analytics-02",
	});
}

export default Component;
