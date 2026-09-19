import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxuw8rb3x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxuw8rb3x"/>`,
		"fallback": "whh:blankstare",
	});
}

export default Component;
