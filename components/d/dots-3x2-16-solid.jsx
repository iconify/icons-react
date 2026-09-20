import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u08u5qbww.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u08u5qbww"/>`,
		"fallback": "sidekickicons:dots-3x2-16-solid",
	});
}

export default Component;
