import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt1pn2bte.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt1pn2bte"/>`,
		"fallback": "system-uicons:chevron-down-double",
	});
}

export default Component;
