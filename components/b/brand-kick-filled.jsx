import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd4ak5pba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd4ak5pba"/>`,
		"fallback": "tabler:brand-kick-filled",
	});
}

export default Component;
