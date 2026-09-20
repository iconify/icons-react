import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afiuy3b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afiuy3b6i"/>`,
		"fallback": "mdi:ballot-recount",
	});
}

export default Component;
