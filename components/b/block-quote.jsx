import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv_z3ob6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv_z3ob6e"/>`,
		"fallback": "grommet-icons:block-quote",
	});
}

export default Component;
