import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akmt2_8eg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akmt2_8eg"/>`,
		"fallback": "sidekickicons:badge-20-solid",
	});
}

export default Component;
