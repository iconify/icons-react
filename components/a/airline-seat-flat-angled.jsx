import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cckjnebfo.css';

const viewBox = {"width":456,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cckjnebfo"/>`,
		"fallback": "zmdi:airline-seat-flat-angled",
	});
}

export default Component;
