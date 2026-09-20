import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jduy-2b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jduy-2b1f"/>`,
		"fallback": "lineicons:github",
	});
}

export default Component;
