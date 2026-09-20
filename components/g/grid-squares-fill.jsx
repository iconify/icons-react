import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/funl9eb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="funl9eb0g"/>`,
		"fallback": "keyline-icons:grid-squares-fill",
	});
}

export default Component;
