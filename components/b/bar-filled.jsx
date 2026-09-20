import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3557nbil.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h3557nbil"/>`,
		"fallback": "lsicon:bar-filled",
	});
}

export default Component;
