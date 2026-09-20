import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pna9f5cye.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pna9f5cye"/>`,
		"fallback": "pinhead:delaware",
	});
}

export default Component;
