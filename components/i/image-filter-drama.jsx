import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4jes1byz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4jes1byz"/>`,
		"fallback": "mdi:image-filter-drama",
	});
}

export default Component;
