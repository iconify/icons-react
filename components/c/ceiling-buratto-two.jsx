import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxnua2b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxnua2b3g"/>`,
		"fallback": "cbi:ceiling-buratto-two",
	});
}

export default Component;
