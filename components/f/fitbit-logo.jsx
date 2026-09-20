import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3-3_ub0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3-3_ub0y"/>`,
		"fallback": "streamline-ultimate-color:fitbit-logo",
	});
}

export default Component;
