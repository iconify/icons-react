import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8zf1xq5l.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8zf1xq5l"/>`,
		"fallback": "fa:envelope",
	});
}

export default Component;
