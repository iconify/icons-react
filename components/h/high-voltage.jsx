import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqe3ykbgc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqe3ykbgc"/>`,
		"fallback": "fluent-emoji-high-contrast:high-voltage",
	});
}

export default Component;
