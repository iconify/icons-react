import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpsjg6mpw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mpsjg6mpw"/>`,
		"fallback": "sidekickicons:arrow-curve-right-up-20-solid",
	});
}

export default Component;
