import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b72-nxbwc.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b72-nxbwc"/>`,
		"fallback": "formkit:bookmark",
	});
}

export default Component;
