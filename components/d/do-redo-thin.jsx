import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur3vd-8dh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur3vd-8dh"/>`,
		"fallback": "iconamoon:do-redo-thin",
	});
}

export default Component;
