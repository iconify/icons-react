import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic72lyaaj.css';

const viewBox = {"width":46,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic72lyaaj"/>`,
		"fallback": "formkit:draghandle",
	});
}

export default Component;
