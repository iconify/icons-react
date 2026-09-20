import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozhxt1-zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozhxt1-zs"/>`,
		"fallback": "mdi:arrow-top-left",
	});
}

export default Component;
