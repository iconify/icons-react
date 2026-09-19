import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqp_n4b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqp_n4b4i"/>`,
		"fallback": "iconamoon:comment-thin",
	});
}

export default Component;
