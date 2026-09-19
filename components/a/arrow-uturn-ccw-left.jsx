import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2x2j3ulr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j2x2j3ulr"/>`,
		"fallback": "gravity-ui:arrow-uturn-ccw-left",
	});
}

export default Component;
