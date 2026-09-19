import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijfzgk9nv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijfzgk9nv"/>`,
		"fallback": "hugeicons:exclamation-mark-slash",
	});
}

export default Component;
