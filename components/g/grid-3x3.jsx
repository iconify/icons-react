import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjeey1y5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjeey1y5p"/>`,
		"fallback": "keyline-icons:grid-3x3",
	});
}

export default Component;
