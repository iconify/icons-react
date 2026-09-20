import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whi2z9b1h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whi2z9b1h"/>`,
		"fallback": "lsicon:find-filled",
	});
}

export default Component;
