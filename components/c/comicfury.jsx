import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flmzjob0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flmzjob0n"/>`,
		"fallback": "thesvg:comicfury",
	});
}

export default Component;
