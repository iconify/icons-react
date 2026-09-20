import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omt6y8bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omt6y8bkn"/>`,
		"fallback": "token:bob",
	});
}

export default Component;
