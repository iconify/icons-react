import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozj561beo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozj561beo"/>`,
		"fallback": "withicons:folder-tree-gloss",
	});
}

export default Component;
