import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya4px7blt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya4px7blt"/>`,
		"fallback": "famicons:arrow-redo-sharp",
	});
}

export default Component;
