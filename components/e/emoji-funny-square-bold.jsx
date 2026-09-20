import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx__e5bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xx__e5bft"/>`,
		"fallback": "solar:emoji-funny-square-bold",
	});
}

export default Component;
