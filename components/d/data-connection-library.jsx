import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jooc4dsmf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jooc4dsmf"/>`,
		"fallback": "fluent-mdl2:data-connection-library",
	});
}

export default Component;
