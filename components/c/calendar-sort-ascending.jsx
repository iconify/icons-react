import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmum_5bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmum_5bij"/>`,
		"fallback": "pixelarticons:calendar-sort-ascending",
	});
}

export default Component;
