import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk0iyubac.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk0iyubac"/>`,
		"fallback": "whh:braillel",
	});
}

export default Component;
