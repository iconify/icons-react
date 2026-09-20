import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftk_62bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftk_62bfj"/>`,
		"fallback": "mdi:form-dropdown",
	});
}

export default Component;
