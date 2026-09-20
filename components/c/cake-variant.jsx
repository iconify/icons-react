import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy4b1wx4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy4b1wx4b"/>`,
		"fallback": "mdi:cake-variant",
	});
}

export default Component;
