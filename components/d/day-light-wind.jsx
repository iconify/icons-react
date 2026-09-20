import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_2n6y2bv.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_2n6y2bv"/>`,
		"fallback": "wi:day-light-wind",
	});
}

export default Component;
