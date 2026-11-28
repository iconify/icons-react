import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt3xv6jin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt3xv6jin"/>`,
		"fallback": "noviair:clock-9",
	});
}

export default Component;
