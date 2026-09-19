import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj1tylb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj1tylb6n"/>`,
		"fallback": "basil:bank-solid",
	});
}

export default Component;
