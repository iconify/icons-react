import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcje2ji1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcje2ji1m"/>`,
		"fallback": "boxicons:git-merge",
	});
}

export default Component;
