import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq4tbcbmt.css';

const viewBox = {"width":464,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq4tbcbmt"/>`,
		"fallback": "ps:friendfeed",
	});
}

export default Component;
