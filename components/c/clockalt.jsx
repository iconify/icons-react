import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0ofj7b_t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0ofj7b_t"/>`,
		"fallback": "whh:clockalt",
	});
}

export default Component;
