import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckwu9ub3c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckwu9ub3c"/>`,
		"fallback": "qlementine-icons:call-16",
	});
}

export default Component;
