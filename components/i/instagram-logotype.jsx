import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvr6yacwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvr6yacwf"/>`,
		"fallback": "lineicons:instagram-logotype",
	});
}

export default Component;
