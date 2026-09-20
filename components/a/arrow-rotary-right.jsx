import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkq91bbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkq91bbtz"/>`,
		"fallback": "tabler:arrow-rotary-right",
	});
}

export default Component;
