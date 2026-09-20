import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uum2aj53r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uum2aj53r"/>`,
		"fallback": "thesvg-color:facebook-gaming",
	});
}

export default Component;
