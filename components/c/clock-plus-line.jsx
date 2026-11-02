import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_b3mzfrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_b3mzfrg"/>`,
		"fallback": "mingcute:clock-plus-line",
	});
}

export default Component;
