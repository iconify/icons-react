import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1ipy5m-e.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1ipy5m-e"/>`,
		"fallback": "fluent-mdl2:help-mirrored",
	});
}

export default Component;
