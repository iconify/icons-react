import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki8z8ok4a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ki8z8ok4a"/>`,
		"fallback": "gravity-ui:caret-up",
	});
}

export default Component;
