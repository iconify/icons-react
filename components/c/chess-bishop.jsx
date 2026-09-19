import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k544t6a1a.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k544t6a1a"/>`,
		"fallback": "fa-solid:chess-bishop",
	});
}

export default Component;
