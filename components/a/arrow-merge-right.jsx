import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn9uko5kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn9uko5kt"/>`,
		"fallback": "tabler:arrow-merge-right",
	});
}

export default Component;
