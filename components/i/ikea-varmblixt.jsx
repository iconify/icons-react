import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7q-x6bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7q-x6bjn"/>`,
		"fallback": "cbi:ikea-varmblixt",
	});
}

export default Component;
