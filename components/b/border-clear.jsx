import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooh7wvubl.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooh7wvubl"/>`,
		"fallback": "zmdi:border-clear",
	});
}

export default Component;
