import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5h_ypb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5h_ypb5y"/>`,
		"fallback": "iconamoon:arrow-down-2-thin",
	});
}

export default Component;
