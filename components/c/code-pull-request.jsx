import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7fxu2b5h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n7fxu2b5h"/>`,
		"fallback": "gravity-ui:code-pull-request",
	});
}

export default Component;
