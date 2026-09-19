import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzaw-obto.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzaw-obto"/>`,
		"fallback": "topcoat:back",
	});
}

export default Component;
