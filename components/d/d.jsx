import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_rq9mb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_rq9mb1p"/>`,
		"fallback": "thesvg-color:d",
	});
}

export default Component;
