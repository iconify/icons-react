import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy0dksb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy0dksb8g"/>`,
		"fallback": "ri:file-gif-line",
	});
}

export default Component;
