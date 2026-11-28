import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjyisn2gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjyisn2gs"/>`,
		"fallback": "iconaut:grid-2x2-x-solid",
	});
}

export default Component;
