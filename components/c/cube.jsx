import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw-771bay.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rw-771bay"/>`,
		"fallback": "gravity-ui:cube",
	});
}

export default Component;
