import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juckzxily.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="juckzxily"/>`,
		"fallback": "pajamas:go-back",
	});
}

export default Component;
