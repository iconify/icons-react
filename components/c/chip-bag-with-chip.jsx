import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmw_3pbmo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmw_3pbmo"/>`,
		"fallback": "pinhead:chip-bag-with-chip",
	});
}

export default Component;
