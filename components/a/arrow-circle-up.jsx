import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvu5-paxf.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvu5-paxf"/>`,
		"fallback": "fa:arrow-circle-up",
	});
}

export default Component;
