import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_vv19b4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_vv19b4f"/>`,
		"fallback": "ci:calendar-event",
	});
}

export default Component;
