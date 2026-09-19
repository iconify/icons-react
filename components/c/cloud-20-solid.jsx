import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bthd_yb6k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bthd_yb6k"/>`,
		"fallback": "heroicons:cloud-20-solid",
	});
}

export default Component;
