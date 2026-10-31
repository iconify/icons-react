import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaig3pn7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaig3pn7l"/>`,
		"fallback": "coolicons:circle-plus-round",
	});
}

export default Component;
