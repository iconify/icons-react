import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg_x3yb1f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg_x3yb1f"/>`,
		"fallback": "carbon:calendar",
	});
}

export default Component;
