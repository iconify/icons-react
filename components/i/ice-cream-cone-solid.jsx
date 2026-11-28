import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo-ev3n8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo-ev3n8p"/>`,
		"fallback": "iconaut:ice-cream-cone-solid",
	});
}

export default Component;
