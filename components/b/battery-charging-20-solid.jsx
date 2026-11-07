import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1kah977l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e1kah977l"/>`,
		"fallback": "sidekickicons:battery-charging-20-solid",
	});
}

export default Component;
