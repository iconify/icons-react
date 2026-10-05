import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn08rb2an.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn08rb2an"/>`,
		"fallback": "pinhead:canoe-above-water",
	});
}

export default Component;
