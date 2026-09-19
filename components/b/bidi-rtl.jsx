import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9dmb1bgq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9dmb1bgq"/>`,
		"fallback": "fluent-mdl2:bidi-rtl",
	});
}

export default Component;
