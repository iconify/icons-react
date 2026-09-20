import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu0w0hb3s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu0w0hb3s"/>`,
		"fallback": "nimbus:bold",
	});
}

export default Component;
