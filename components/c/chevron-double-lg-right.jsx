import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b77n4cccj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b77n4cccj"/>`,
		"fallback": "pajamas:chevron-double-lg-right",
	});
}

export default Component;
