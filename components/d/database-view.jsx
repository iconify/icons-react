import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9nupwb6s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9nupwb6s"/>`,
		"fallback": "fluent-mdl2:database-view",
	});
}

export default Component;
