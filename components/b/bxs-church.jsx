import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvfw64xsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvfw64xsn"/>`,
		"fallback": "bx:bxs-church",
	});
}

export default Component;
