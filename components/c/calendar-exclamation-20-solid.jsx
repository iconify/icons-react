import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py1c9c1oh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="py1c9c1oh"/>`,
		"fallback": "sidekickicons:calendar-exclamation-20-solid",
	});
}

export default Component;
