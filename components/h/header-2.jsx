import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igipjz3oo.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igipjz3oo"/>`,
		"fallback": "jam:header-2",
	});
}

export default Component;
