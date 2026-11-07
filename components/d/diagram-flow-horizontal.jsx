import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij2u2nbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij2u2nbsp"/>`,
		"fallback": "vadivam:diagram-flow-horizontal",
	});
}

export default Component;
