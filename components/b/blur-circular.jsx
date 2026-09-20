import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmo-rdb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmo-rdb8y"/>`,
		"fallback": "mdi:blur-circular",
	});
}

export default Component;
