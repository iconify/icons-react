import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb14vtbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb14vtbgw"/>`,
		"fallback": "mdi:compass-outline",
	});
}

export default Component;
