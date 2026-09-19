import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxxbk6bae.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxxbk6bae"/>`,
		"fallback": "fa:crosshairs",
	});
}

export default Component;
