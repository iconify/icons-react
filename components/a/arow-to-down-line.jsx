import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phvm0umma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phvm0umma"/>`,
		"fallback": "mingcute:arow-to-down-line",
	});
}

export default Component;
