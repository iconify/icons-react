import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi36_vj3a.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi36_vj3a"/>`,
		"fallback": "fa-solid:gifts",
	});
}

export default Component;
