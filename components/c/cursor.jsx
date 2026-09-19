import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppr3nnzrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppr3nnzrd"/>`,
		"fallback": "grommet-icons:cursor",
	});
}

export default Component;
