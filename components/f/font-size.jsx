import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jks_f3kme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jks_f3kme"/>`,
		"fallback": "bx:font-size",
	});
}

export default Component;
