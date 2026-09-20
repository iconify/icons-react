import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l-me4bncb.css';
import '../../css/p/p439a9boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="l-me4bncb"/><path clip-rule="evenodd" class="p439a9boh"/></g>`,
		"fallback": "streamline-logos:blogger-logo",
	});
}

export default Component;
