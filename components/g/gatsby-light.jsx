import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmk4btbkg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmk4btbkg"/>`,
		"fallback": "selfhst:gatsby-light",
	});
}

export default Component;
