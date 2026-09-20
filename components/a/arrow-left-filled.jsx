import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkaqowj7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hkaqowj7r"/>`,
		"fallback": "lsicon:arrow-left-filled",
	});
}

export default Component;
