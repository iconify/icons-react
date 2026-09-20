import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvky8xb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvky8xb3i"/>`,
		"fallback": "ri:h-4",
	});
}

export default Component;
