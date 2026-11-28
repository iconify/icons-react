import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9y-kw0_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9y-kw0_g"/>`,
		"fallback": "noviair:fridge",
	});
}

export default Component;
