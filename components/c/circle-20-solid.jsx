import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufw4fv8xu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufw4fv8xu"/>`,
		"fallback": "sidekickicons:circle-20-solid",
	});
}

export default Component;
