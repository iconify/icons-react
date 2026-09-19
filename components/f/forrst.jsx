import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i528ifbbx.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i528ifbbx"/>`,
		"fallback": "whh:forrst",
	});
}

export default Component;
