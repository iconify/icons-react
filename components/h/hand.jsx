import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlwu5xw6o.css';

const viewBox = {"width":304,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlwu5xw6o"/>`,
		"fallback": "ps:hand",
	});
}

export default Component;
