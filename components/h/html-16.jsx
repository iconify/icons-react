import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4m939mnw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4m939mnw"/>`,
		"fallback": "nonicons:html-16",
	});
}

export default Component;
