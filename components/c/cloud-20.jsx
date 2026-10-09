import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzjn5iovv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzjn5iovv"/>`,
		"fallback": "energy-icons:cloud-20",
	});
}

export default Component;
