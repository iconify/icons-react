import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2ll2kbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2ll2kbqj"/>`,
		"fallback": "iconoir:bitcoin-circle-solid",
	});
}

export default Component;
