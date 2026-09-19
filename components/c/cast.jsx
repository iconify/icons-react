import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q61cribaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q61cribaj"/>`,
		"fallback": "ci:cast",
	});
}

export default Component;
