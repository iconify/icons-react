import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alseh7nqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alseh7nqn"/>`,
		"fallback": "mi:bar-chart-alt",
	});
}

export default Component;
