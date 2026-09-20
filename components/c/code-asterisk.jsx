import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uko8-ubwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uko8-ubwl"/>`,
		"fallback": "tabler:code-asterisk",
	});
}

export default Component;
