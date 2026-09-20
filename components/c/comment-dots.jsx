import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4zpm0b8m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y4zpm0b8m"/>`,
		"fallback": "pajamas:comment-dots",
	});
}

export default Component;
