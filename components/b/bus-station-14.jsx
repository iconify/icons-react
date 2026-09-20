import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb64vnbth.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb64vnbth"/>`,
		"fallback": "osmic:bus-station-14",
	});
}

export default Component;
