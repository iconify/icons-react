import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsi_4lbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsi_4lbyf"/>`,
		"fallback": "tabler:arrow-right-bar",
	});
}

export default Component;
