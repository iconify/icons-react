import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oba2thrdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oba2thrdu"/>`,
		"fallback": "noviair-light:christmas-tree",
	});
}

export default Component;
