import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1x5f2bcc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o1x5f2bcc"/>`,
		"fallback": "pajamas:folder-open",
	});
}

export default Component;
