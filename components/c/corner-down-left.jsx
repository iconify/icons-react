import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9ewr3kwo.css';
import '../../css/w/w0fg7jb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9ewr3kwo"/><path class="w0fg7jb_i"/>`,
		"fallback": "uim:corner-down-left",
	});
}

export default Component;
