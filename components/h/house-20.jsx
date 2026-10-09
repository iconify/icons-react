import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz30y8b3r.css';
import '../../css/f/faweyo8dm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz30y8b3r"/><path class="faweyo8dm"/>`,
		"fallback": "energy-icons:house-20",
	});
}

export default Component;
