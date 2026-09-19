import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxg0rzbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxg0rzbgs"/>`,
		"fallback": "iconoir:dots-grid-3x3",
	});
}

export default Component;
