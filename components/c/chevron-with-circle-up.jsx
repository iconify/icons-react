import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb4dsrbug.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb4dsrbug"/>`,
		"fallback": "entypo:chevron-with-circle-up",
	});
}

export default Component;
