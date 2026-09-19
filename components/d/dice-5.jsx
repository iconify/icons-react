import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jctvu8boi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jctvu8boi"/>`,
		"fallback": "gravity-ui:dice-5",
	});
}

export default Component;
