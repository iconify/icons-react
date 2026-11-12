import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkdgd3b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkdgd3b5r"/>`,
		"fallback": "tabler:device-ipad-spark",
	});
}

export default Component;
