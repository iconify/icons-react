import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn4muhbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn4muhbvm"/>`,
		"fallback": "tdesign:filter-off",
	});
}

export default Component;
