import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8qxwmb1f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d8qxwmb1f"/>`,
		"fallback": "lsicon:data-screen-filled",
	});
}

export default Component;
