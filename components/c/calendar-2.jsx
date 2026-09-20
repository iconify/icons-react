import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiz5f-b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oiz5f-b0l"/>`,
		"fallback": "reicon:calendar-2",
	});
}

export default Component;
