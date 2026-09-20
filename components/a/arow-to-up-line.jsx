import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlmp9xaqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlmp9xaqp"/>`,
		"fallback": "mingcute:arow-to-up-line",
	});
}

export default Component;
