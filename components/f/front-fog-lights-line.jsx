import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty4dirbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty4dirbdc"/>`,
		"fallback": "mingcute:front-fog-lights-line",
	});
}

export default Component;
