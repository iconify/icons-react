import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li-550_tr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li-550_tr"/>`,
		"fallback": "energy-icons:heart-off-20-bold",
	});
}

export default Component;
