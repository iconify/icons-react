import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtv447bif.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtv447bif"/>`,
		"fallback": "teenyicons:calendar-plus-outline",
	});
}

export default Component;
