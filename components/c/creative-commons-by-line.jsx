import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u06v9hc2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u06v9hc2t"/>`,
		"fallback": "ri:creative-commons-by-line",
	});
}

export default Component;
