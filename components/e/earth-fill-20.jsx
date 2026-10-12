import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr4_ncbuh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr4_ncbuh"/>`,
		"fallback": "garden:earth-fill-20",
	});
}

export default Component;
