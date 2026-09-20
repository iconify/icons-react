import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0l3ckbbw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c0l3ckbbw"/>`,
		"fallback": "pajamas:duo-chat",
	});
}

export default Component;
