import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlx2ab_yw.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlx2ab_yw"/>`,
		"fallback": "fa:bell-o",
	});
}

export default Component;
