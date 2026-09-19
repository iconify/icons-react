import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro67ohbfz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro67ohbfz"/>`,
		"fallback": "entypo:cog",
	});
}

export default Component;
