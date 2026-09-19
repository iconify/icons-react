import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv2f5p14q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv2f5p14q"/>`,
		"fallback": "fontisto:broken-link",
	});
}

export default Component;
