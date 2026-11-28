import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wptdx6v5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wptdx6v5n"/>`,
		"fallback": "iconaut:diamond-check-solid",
	});
}

export default Component;
