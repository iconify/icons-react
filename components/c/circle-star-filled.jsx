import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opt-i29gx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="opt-i29gx"/>`,
		"fallback": "lsicon:circle-star-filled",
	});
}

export default Component;
