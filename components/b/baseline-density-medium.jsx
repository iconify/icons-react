import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5hd6kogk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5hd6kogk"/>`,
		"fallback": "tabler:baseline-density-medium",
	});
}

export default Component;
