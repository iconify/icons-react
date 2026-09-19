import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eump1ebuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eump1ebuw"/>`,
		"fallback": "boxicons:coffee-cup",
	});
}

export default Component;
