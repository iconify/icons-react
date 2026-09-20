import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjtpl_b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjtpl_b2n"/>`,
		"fallback": "pixel:eye-snake-solid",
	});
}

export default Component;
