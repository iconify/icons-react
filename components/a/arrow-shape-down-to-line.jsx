import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0w57jeaw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j0w57jeaw"/>`,
		"fallback": "gravity-ui:arrow-shape-down-to-line",
	});
}

export default Component;
