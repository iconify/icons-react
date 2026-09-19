import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lil__im4t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lil__im4t"/>`,
		"fallback": "entypo:circular-graph",
	});
}

export default Component;
