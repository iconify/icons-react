import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjz64c8ba.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjz64c8ba"/>`,
		"fallback": "fa7-regular:calendar-check",
	});
}

export default Component;
