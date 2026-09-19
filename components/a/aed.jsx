import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq4e_bcin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq4e_bcin"/>`,
		"fallback": "grommet-icons:aed",
	});
}

export default Component;
