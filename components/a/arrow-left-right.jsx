import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrvn9ab9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrvn9ab9m"/>`,
		"fallback": "mdi:arrow-left-right",
	});
}

export default Component;
