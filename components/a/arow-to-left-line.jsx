import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leb2xdbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leb2xdbjg"/>`,
		"fallback": "mingcute:arow-to-left-line",
	});
}

export default Component;
