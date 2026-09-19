import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn57cxbrt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn57cxbrt"/>`,
		"fallback": "entypo-social:dribbble",
	});
}

export default Component;
