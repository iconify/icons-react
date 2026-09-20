import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5zhelbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5zhelbjj"/>`,
		"fallback": "lets-icons:folder-light",
	});
}

export default Component;
