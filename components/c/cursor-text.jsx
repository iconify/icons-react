import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge6fk3bkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge6fk3bkt"/>`,
		"fallback": "mdi:cursor-text",
	});
}

export default Component;
