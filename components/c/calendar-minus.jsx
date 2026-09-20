import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voswg_4lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voswg_4lh"/>`,
		"fallback": "vadivam:calendar-minus",
	});
}

export default Component;
