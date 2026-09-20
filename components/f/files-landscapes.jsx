import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz30t38ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz30t38ho"/>`,
		"fallback": "uil:files-landscapes",
	});
}

export default Component;
