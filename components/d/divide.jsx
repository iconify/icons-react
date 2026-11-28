import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyc9jsn5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyc9jsn5i"/>`,
		"fallback": "noviair-light:divide",
	});
}

export default Component;
