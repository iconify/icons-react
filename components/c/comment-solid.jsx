import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qozfh9b0y.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qozfh9b0y"/>`,
		"fallback": "fluent-mdl2:comment-solid",
	});
}

export default Component;
