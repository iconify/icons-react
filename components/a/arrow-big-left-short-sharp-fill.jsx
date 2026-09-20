import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r07pcme2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r07pcme2w"/>`,
		"fallback": "keyline-icons:arrow-big-left-short-sharp-fill",
	});
}

export default Component;
