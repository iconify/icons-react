import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j313be5lq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j313be5lq"/>`,
		"fallback": "cib:graphql",
	});
}

export default Component;
