import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p02trow8h.css';

const viewBox = {"width":19,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p02trow8h"/>`,
		"fallback": "fontisto:500px",
	});
}

export default Component;
