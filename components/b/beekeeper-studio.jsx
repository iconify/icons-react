import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtddqwb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtddqwb4a"/>`,
		"fallback": "thesvg-color:beekeeper-studio",
	});
}

export default Component;
