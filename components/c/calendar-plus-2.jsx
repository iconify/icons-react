import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox_5e8bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox_5e8bhn"/>`,
		"fallback": "vadivam:calendar-plus-2",
	});
}

export default Component;
