import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6hh1sbhp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6hh1sbhp"/>`,
		"fallback": "garden:document-search-stroke-12",
	});
}

export default Component;
