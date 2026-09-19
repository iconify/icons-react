import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsd1-gkmc.css';

const viewBox = {"width":1024,"height":1022};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsd1-gkmc"/>`,
		"fallback": "whh:campfire",
	});
}

export default Component;
