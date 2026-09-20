import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlsl8d1ym.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlsl8d1ym"/>`,
		"fallback": "sidekickicons:dots-2x3-20-solid",
	});
}

export default Component;
