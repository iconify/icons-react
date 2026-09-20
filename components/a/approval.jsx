import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itai80_8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itai80_8c"/>`,
		"fallback": "mdi:approval",
	});
}

export default Component;
