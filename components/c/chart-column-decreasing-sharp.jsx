import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac8ulaccr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac8ulaccr"/>`,
		"fallback": "pixelarticons:chart-column-decreasing-sharp",
	});
}

export default Component;
