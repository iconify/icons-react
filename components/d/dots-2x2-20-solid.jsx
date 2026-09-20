import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk0g2vbew.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk0g2vbew"/>`,
		"fallback": "sidekickicons:dots-2x2-20-solid",
	});
}

export default Component;
