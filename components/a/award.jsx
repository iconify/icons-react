import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo7v9xb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo7v9xb1z"/>`,
		"fallback": "noviair:award",
	});
}

export default Component;
