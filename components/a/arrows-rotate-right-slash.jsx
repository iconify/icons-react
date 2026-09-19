import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwxccybgr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jwxccybgr"/>`,
		"fallback": "gravity-ui:arrows-rotate-right-slash",
	});
}

export default Component;
