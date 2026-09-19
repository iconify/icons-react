import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec55z3bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec55z3bqw"/>`,
		"fallback": "bx:bxl-periscope",
	});
}

export default Component;
