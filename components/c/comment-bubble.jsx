import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqj8fxb2t.css';

const viewBox = {"width":1792,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqj8fxb2t"/>`,
		"fallback": "vs:comment-bubble",
	});
}

export default Component;
