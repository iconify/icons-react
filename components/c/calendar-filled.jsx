import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg0si9bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg0si9bhl"/>`,
		"fallback": "tdesign:calendar-filled",
	});
}

export default Component;
