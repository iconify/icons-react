import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqu7-60id.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqu7-60id"/>`,
		"fallback": "fluent-mdl2:backlog-list",
	});
}

export default Component;
