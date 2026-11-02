import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-c_02b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-c_02b5f"/>`,
		"fallback": "mingcute:baby-carriage-fill",
	});
}

export default Component;
