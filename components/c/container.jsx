import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnx8igb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnx8igb7d"/>`,
		"fallback": "noviair-light:container",
	});
}

export default Component;
