import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9xjjhdxu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f9xjjhdxu"/>`,
		"fallback": "gravity-ui:circle-link",
	});
}

export default Component;
