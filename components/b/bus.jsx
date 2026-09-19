import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmxbg2yju.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmxbg2yju"/>`,
		"fallback": "fa:bus",
	});
}

export default Component;
