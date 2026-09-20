import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2cnt5b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r2cnt5b1q"/>`,
		"fallback": "reicon:cart",
	});
}

export default Component;
