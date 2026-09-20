import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7zcvj1fl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7zcvj1fl"/>`,
		"fallback": "mdi:event-remove",
	});
}

export default Component;
