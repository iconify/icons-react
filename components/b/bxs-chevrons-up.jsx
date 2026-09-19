import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw56jtzlm.css';
import '../../css/i/i7gp9cbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw56jtzlm"/><path class="i7gp9cbjx"/>`,
		"fallback": "bx:bxs-chevrons-up",
	});
}

export default Component;
