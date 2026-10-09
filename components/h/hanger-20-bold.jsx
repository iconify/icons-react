import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6sva07xu.css';
import '../../css/v/vt3tbsbdf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6sva07xu"/><path class="vt3tbsbdf"/>`,
		"fallback": "energy-icons:hanger-20-bold",
	});
}

export default Component;
