import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2z7ddc-y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2z7ddc-y"/>`,
		"fallback": "energy-icons:indent-20-bold",
	});
}

export default Component;
