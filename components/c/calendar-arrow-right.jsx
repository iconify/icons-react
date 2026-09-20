import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phdf0gb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phdf0gb4x"/>`,
		"fallback": "pixelarticons:calendar-arrow-right",
	});
}

export default Component;
