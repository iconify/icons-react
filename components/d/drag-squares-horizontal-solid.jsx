import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4h15gb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4h15gb0v"/>`,
		"fallback": "stash:drag-squares-horizontal-solid",
	});
}

export default Component;
