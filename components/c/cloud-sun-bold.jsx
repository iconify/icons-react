import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7ajkhrwp.css';
import '../../css/z/zb6pr8b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7ajkhrwp"/><path class="zb6pr8b2k"/>`,
		"fallback": "solar:cloud-sun-bold",
	});
}

export default Component;
