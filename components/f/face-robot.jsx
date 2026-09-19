import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4qou-b1e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h4qou-b1e"/>`,
		"fallback": "gravity-ui:face-robot",
	});
}

export default Component;
