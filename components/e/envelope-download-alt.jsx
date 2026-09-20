import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok8dtubfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok8dtubfk"/>`,
		"fallback": "uil:envelope-download-alt",
	});
}

export default Component;
