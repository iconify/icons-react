import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fieqwcbgp.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fieqwcbgp"/>`,
		"fallback": "zmdi:assignment-account",
	});
}

export default Component;
