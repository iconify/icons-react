import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp7ukgblu.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp7ukgblu"/>`,
		"fallback": "fa6-solid:bold",
	});
}

export default Component;
