import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk-6r4b8t.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk-6r4b8t"/>`,
		"fallback": "whh:autoflash",
	});
}

export default Component;
