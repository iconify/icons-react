import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7d75gb2u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e7d75gb2u"/>`,
		"fallback": "pajamas:doc-versions",
	});
}

export default Component;
