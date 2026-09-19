import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vun3xnubm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vun3xnubm"/>`,
		"fallback": "bxs:arrow-from-top",
	});
}

export default Component;
