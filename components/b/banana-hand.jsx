import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9tgmbbcd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9tgmbbcd"/>`,
		"fallback": "pinhead:banana-hand",
	});
}

export default Component;
