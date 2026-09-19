import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wssfh2qzk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wssfh2qzk"/>`,
		"fallback": "bi:file",
	});
}

export default Component;
