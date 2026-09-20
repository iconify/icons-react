import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glwy-gbnm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glwy-gbnm"/>`,
		"fallback": "sidekickicons:circle-dashed-20-solid",
	});
}

export default Component;
