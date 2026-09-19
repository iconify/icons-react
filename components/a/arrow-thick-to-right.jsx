import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/talrrz3nn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="talrrz3nn"/>`,
		"fallback": "cil:arrow-thick-to-right",
	});
}

export default Component;
