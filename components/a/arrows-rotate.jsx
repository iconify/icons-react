import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjuz5xywi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjuz5xywi"/>`,
		"fallback": "meteor-icons:arrows-rotate",
	});
}

export default Component;
