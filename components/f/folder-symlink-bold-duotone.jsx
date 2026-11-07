import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2nrf10bf.css';
import '../../css/r/ro0rknjpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2nrf10bf"/><path class="ro0rknjpi"/>`,
		"fallback": "solar:folder-symlink-bold-duotone",
	});
}

export default Component;
