import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnar-68-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnar-68-v"/>`,
		"fallback": "iconoir:bookmark-empty",
	});
}

export default Component;
