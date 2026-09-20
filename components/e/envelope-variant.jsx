import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-xfzbb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-xfzbb0k"/>`,
		"fallback": "mdi:envelope-variant",
	});
}

export default Component;
