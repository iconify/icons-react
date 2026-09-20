import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t44l9wbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t44l9wbra"/>`,
		"fallback": "mdi:bulb-group-outline",
	});
}

export default Component;
