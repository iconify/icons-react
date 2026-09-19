import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya6h9sbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya6h9sbwd"/>`,
		"fallback": "bxs:fast-forward-circle",
	});
}

export default Component;
