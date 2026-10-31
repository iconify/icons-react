import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5y2e5btw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u5y2e5btw"/>`,
		"fallback": "sidekickicons:dice-20-solid",
	});
}

export default Component;
