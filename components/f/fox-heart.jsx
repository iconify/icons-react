import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1xw4nrpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1xw4nrpo"/>`,
		"fallback": "noviair:fox-heart",
	});
}

export default Component;
