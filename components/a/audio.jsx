import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuk26wbik.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuk26wbik"/>`,
		"fallback": "topcoat:audio",
	});
}

export default Component;
