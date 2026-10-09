import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nujs77b5j.css';
import '../../css/h/hw94v6bup.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nujs77b5j"/><path class="hw94v6bup"/>`,
		"fallback": "energy-icons:chimney-20-bold",
	});
}

export default Component;
