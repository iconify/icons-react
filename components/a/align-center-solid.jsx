import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h49p6u_wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h49p6u_wv"/>`,
		"fallback": "pixel:align-center-solid",
	});
}

export default Component;
