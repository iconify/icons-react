import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1zpmgsmz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1zpmgsmz"/>`,
		"fallback": "fa-solid:air-freshener",
	});
}

export default Component;
