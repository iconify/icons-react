import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx5tgy66g.css';
import '../../css/g/gx3qh1bgl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx5tgy66g"/><path class="gx3qh1bgl"/>`,
		"fallback": "qlementine-icons:buffer-16",
	});
}

export default Component;
