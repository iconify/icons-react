import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq9yo4btm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq9yo4btm"/>`,
		"fallback": "garden:github-stroke-12",
	});
}

export default Component;
