import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdu_9bchp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdu_9bchp"/>`,
		"fallback": "f7:calendar-badge-minus",
	});
}

export default Component;
