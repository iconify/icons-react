import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6d8rs0kr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6d8rs0kr"/>`,
		"fallback": "catppuccin:asciidoc",
	});
}

export default Component;
