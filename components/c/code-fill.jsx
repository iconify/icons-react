import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apha-ex_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apha-ex_a"/>`,
		"fallback": "mingcute:code-fill",
	});
}

export default Component;
