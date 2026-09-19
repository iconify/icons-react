import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_10jfv9c.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_10jfv9c"/>`,
		"fallback": "el:cog",
	});
}

export default Component;
