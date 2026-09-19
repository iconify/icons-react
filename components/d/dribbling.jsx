import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir_2ncbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir_2ncbcp"/>`,
		"fallback": "boxicons:dribbling",
	});
}

export default Component;
