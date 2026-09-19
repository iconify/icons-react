import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt21lp_0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt21lp_0k"/>`,
		"fallback": "hugeicons:colosseum",
	});
}

export default Component;
