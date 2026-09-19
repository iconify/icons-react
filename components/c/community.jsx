import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q033zj_ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q033zj_ur"/>`,
		"fallback": "iconoir:community",
	});
}

export default Component;
