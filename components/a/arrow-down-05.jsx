import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwl_1uwuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwl_1uwuq"/>`,
		"fallback": "hugeicons:arrow-down-05",
	});
}

export default Component;
