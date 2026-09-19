import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9u37hw3g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9u37hw3g"/>`,
		"fallback": "cryptocurrency:blk",
	});
}

export default Component;
