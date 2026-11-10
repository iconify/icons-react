import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5l9-mb6l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p5l9-mb6l"/>`,
		"fallback": "sidekickicons:calendar-check-20-solid",
	});
}

export default Component;
