import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcavh9b3n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcavh9b3n"/>`,
		"fallback": "dinkie-icons:cube",
	});
}

export default Component;
