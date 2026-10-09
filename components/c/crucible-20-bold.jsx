import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fclurev-p.css';
import '../../css/v/v-lkcnbeq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fclurev-p"/><path class="v-lkcnbeq"/>`,
		"fallback": "energy-icons:crucible-20-bold",
	});
}

export default Component;
