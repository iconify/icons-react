import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4ey6x3to.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4ey6x3to"/>`,
		"fallback": "fa:file",
	});
}

export default Component;
