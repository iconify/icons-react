import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0z9cybyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0z9cybyf"/>`,
		"fallback": "tabler:circle-arrow-right",
	});
}

export default Component;
