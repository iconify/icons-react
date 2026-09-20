import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/z2r9h7xkr.css';
import '../../css/e/ef9qwv4zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="z2r9h7xkr"/><path class="ef9qwv4zg"/></g>`,
		"fallback": "streamline-logos:feedly-logo",
	});
}

export default Component;
