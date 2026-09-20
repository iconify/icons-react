import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgw5nzbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgw5nzbyf"/>`,
		"fallback": "tabler:arrow-left-bar",
	});
}

export default Component;
