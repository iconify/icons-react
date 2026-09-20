import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up2z56_ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up2z56_ho"/>`,
		"fallback": "thesvg-color:cratedb",
	});
}

export default Component;
