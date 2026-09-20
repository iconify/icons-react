import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7v99r1ym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7v99r1ym"/>`,
		"fallback": "stash:ellipsis-v",
	});
}

export default Component;
