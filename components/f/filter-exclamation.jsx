import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3jpf0bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3jpf0bzj"/>`,
		"fallback": "tabler:filter-exclamation",
	});
}

export default Component;
