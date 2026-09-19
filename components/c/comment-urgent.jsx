import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhlvfjb2a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhlvfjb2a"/>`,
		"fallback": "fluent-mdl2:comment-urgent",
	});
}

export default Component;
