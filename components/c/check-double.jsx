import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx2-8-56a.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx2-8-56a"/>`,
		"fallback": "fa6-solid:check-double",
	});
}

export default Component;
