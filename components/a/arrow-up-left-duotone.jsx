import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3q-b4urp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary v3q-b4urp"/>`,
		"fallback": "iconaut:arrow-up-left-duotone",
	});
}

export default Component;
