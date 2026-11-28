import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj7raux_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj7raux_l"/>`,
		"fallback": "noviair:chevron-right",
	});
}

export default Component;
