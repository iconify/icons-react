import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-h7_1-zc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-h7_1-zc"/>`,
		"fallback": "fluent-mdl2:brush",
	});
}

export default Component;
