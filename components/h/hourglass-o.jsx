import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0ts2wbrb.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0ts2wbrb"/>`,
		"fallback": "fa:hourglass-o",
	});
}

export default Component;
