import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnvy57b8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnvy57b8c"/>`,
		"fallback": "mdi:cellphone-download",
	});
}

export default Component;
