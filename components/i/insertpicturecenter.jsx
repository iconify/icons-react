import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8ipqhb2a.css';

const viewBox = {"width":1025,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8ipqhb2a"/>`,
		"fallback": "whh:insertpicturecenter",
	});
}

export default Component;
