import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4j_5erem.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4j_5erem"/>`,
		"fallback": "jam:bottle-f",
	});
}

export default Component;
