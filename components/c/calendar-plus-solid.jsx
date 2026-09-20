import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7ua0mm9f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e7ua0mm9f"/>`,
		"fallback": "teenyicons:calendar-plus-solid",
	});
}

export default Component;
