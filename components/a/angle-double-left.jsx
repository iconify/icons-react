import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz4bd4kev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz4bd4kev"/>`,
		"fallback": "uil:angle-double-left",
	});
}

export default Component;
