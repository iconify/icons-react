import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4pew8t4p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4pew8t4p"/>`,
		"fallback": "whh:avatar",
	});
}

export default Component;
