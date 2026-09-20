import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyde7_dhp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyde7_dhp"/>`,
		"fallback": "zondicons:gift",
	});
}

export default Component;
