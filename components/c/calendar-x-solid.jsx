import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je626mxyg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="je626mxyg"/>`,
		"fallback": "teenyicons:calendar-x-solid",
	});
}

export default Component;
