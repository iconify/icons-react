import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmbd2pb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmbd2pb-w"/>`,
		"fallback": "iconoir:input-search",
	});
}

export default Component;
