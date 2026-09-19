import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8x7nbbhk.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8x7nbbhk"/>`,
		"fallback": "fa-solid:indent",
	});
}

export default Component;
