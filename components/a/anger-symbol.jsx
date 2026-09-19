import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us0c0obwq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us0c0obwq"/>`,
		"fallback": "fluent-emoji-flat:anger-symbol",
	});
}

export default Component;
