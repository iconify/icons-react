import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm8nr1k6r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm8nr1k6r"/>`,
		"fallback": "icon-park:dislike",
	});
}

export default Component;
