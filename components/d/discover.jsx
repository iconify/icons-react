import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o86-0b4qj.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o86-0b4qj"/>`,
		"fallback": "brandico:discover",
	});
}

export default Component;
