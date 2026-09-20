import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjsq2obcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjsq2obcy"/>`,
		"fallback": "simple-icons:amazonsimpleemailservice",
	});
}

export default Component;
