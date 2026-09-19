import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpz5y8b9x.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpz5y8b9x"/>`,
		"fallback": "el:headphones",
	});
}

export default Component;
