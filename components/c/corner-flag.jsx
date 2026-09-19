import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqzs52n4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqzs52n4e"/>`,
		"fallback": "game-icons:corner-flag",
	});
}

export default Component;
