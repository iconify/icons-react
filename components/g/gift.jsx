import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsq5iorbr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lsq5iorbr"/>`,
		"fallback": "gravity-ui:gift",
	});
}

export default Component;
