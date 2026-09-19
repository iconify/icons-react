import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iddj-1bnv.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iddj-1bnv"/>`,
		"fallback": "fontisto:day-rain",
	});
}

export default Component;
