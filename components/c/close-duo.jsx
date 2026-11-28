import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as5to3b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as5to3b6o"/>`,
		"fallback": "iconaut:close-duo",
	});
}

export default Component;
