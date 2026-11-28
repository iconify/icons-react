import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umn1iwb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umn1iwb4t"/>`,
		"fallback": "noviair:bowling",
	});
}

export default Component;
