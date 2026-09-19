import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie9k28r9w.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie9k28r9w"/>`,
		"fallback": "gis:bookmark-poi",
	});
}

export default Component;
