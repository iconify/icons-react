import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t48mlfbhe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t48mlfbhe"/>`,
		"fallback": "gravity-ui:arrow-chevron-down",
	});
}

export default Component;
