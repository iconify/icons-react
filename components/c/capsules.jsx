import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkq99-j3y.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkq99-j3y"/>`,
		"fallback": "fa-solid:capsules",
	});
}

export default Component;
