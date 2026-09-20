import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cte1i0tye.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cte1i0tye"/>`,
		"fallback": "pinhead:female-groin",
	});
}

export default Component;
