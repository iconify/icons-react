import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll2_3eb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll2_3eb1w"/>`,
		"fallback": "uil:brightness-empty",
	});
}

export default Component;
