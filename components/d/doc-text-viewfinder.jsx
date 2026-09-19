import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayvakk8ye.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayvakk8ye"/>`,
		"fallback": "f7:doc-text-viewfinder",
	});
}

export default Component;
