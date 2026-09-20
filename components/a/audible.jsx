import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r10oa6bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r10oa6bjl"/>`,
		"fallback": "thesvg-color:audible",
	});
}

export default Component;
