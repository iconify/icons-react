import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxxbe6b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxxbe6b3a"/>`,
		"fallback": "mdi:barley-off",
	});
}

export default Component;
