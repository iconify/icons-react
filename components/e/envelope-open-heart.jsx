import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx1xdecpn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx1xdecpn"/>`,
		"fallback": "bi:envelope-open-heart",
	});
}

export default Component;
