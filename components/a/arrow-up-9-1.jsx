import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxh1f2bbb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxh1f2bbb"/>`,
		"fallback": "fa6-solid:arrow-up-9-1",
	});
}

export default Component;
