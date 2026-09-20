import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0d8qi36j.css';
import '../../css/j/jej9w9b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0d8qi36j"/><path class="jej9w9b1s"/>`,
		"fallback": "mingcute:fish-line",
	});
}

export default Component;
