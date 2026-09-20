import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqg76lbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqg76lbju"/>`,
		"fallback": "lucide:bookmark-off",
	});
}

export default Component;
