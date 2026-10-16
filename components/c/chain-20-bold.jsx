import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agoxzxbge.css';
import '../../css/m/mb2ru1gou.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agoxzxbge"/><path class="mb2ru1gou"/>`,
		"fallback": "energy-icons:chain-20-bold",
	});
}

export default Component;
