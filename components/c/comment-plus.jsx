import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgqzw8ohi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zgqzw8ohi"/>`,
		"fallback": "gravity-ui:comment-plus",
	});
}

export default Component;
