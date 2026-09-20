import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnkyxmk4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnkyxmk4m"/>`,
		"fallback": "thesvg:china-railway",
	});
}

export default Component;
