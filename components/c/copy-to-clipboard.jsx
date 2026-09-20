import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a61m6fb_v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a61m6fb_v"/>`,
		"fallback": "pajamas:copy-to-clipboard",
	});
}

export default Component;
