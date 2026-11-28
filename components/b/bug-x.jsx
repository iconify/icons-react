import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wut467bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wut467bix"/>`,
		"fallback": "noviair:bug-x",
	});
}

export default Component;
