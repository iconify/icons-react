import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbqn-4-rf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbqn-4-rf"/>`,
		"fallback": "maki:bakery",
	});
}

export default Component;
