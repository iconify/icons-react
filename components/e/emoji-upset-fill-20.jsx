import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwg583h1b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwg583h1b"/>`,
		"fallback": "garden:emoji-upset-fill-20",
	});
}

export default Component;
