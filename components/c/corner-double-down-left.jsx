import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz14hze0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz14hze0r"/>`,
		"fallback": "gg:corner-double-down-left",
	});
}

export default Component;
