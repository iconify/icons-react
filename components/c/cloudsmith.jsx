import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oviyegb7m.css';

const viewBox = {"width":332,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oviyegb7m"/>`,
		"fallback": "fa-brands:cloudsmith",
	});
}

export default Component;
