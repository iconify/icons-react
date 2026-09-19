import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1fbh3b8b.css';

const viewBox = {"width":962,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1fbh3b8b"/>`,
		"fallback": "whh:fan",
	});
}

export default Component;
