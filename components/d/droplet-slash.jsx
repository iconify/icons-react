import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be94h47pf.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be94h47pf"/>`,
		"fallback": "fa6-solid:droplet-slash",
	});
}

export default Component;
