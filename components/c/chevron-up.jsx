import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m63-p253l.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m63-p253l"/>`,
		"fallback": "fa-solid:chevron-up",
	});
}

export default Component;
