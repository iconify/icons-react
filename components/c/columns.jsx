import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5l_zy6kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5l_zy6kb"/>`,
		"fallback": "noviair:columns",
	});
}

export default Component;
