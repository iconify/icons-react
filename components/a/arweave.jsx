import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr33f7nqp.css';
import '../../css/a/afu1s7q2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr33f7nqp"/><path class="afu1s7q2x"/>`,
		"fallback": "pixel:arweave",
	});
}

export default Component;
