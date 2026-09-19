import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iokq22b6c.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iokq22b6c"/>`,
		"fallback": "fa-solid:cross",
	});
}

export default Component;
