import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9le04bbb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u9le04bbb"/>`,
		"fallback": "gravity-ui:chevrons-down",
	});
}

export default Component;
