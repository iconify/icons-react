import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1ebvg0wo.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1ebvg0wo"/>`,
		"fallback": "fa6-solid:eye",
	});
}

export default Component;
