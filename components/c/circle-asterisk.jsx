import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8ib-cu8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8ib-cu8l"/>`,
		"fallback": "tabler:circle-asterisk",
	});
}

export default Component;
