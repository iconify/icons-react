import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9eqz_xei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9eqz_xei"/>`,
		"fallback": "iconoir:industry",
	});
}

export default Component;
