import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rr0cjccir.css';
import '../../css/o/okz5nboyn.css';
import '../../css/s/s8e7uwb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="rr0cjccir"/><path class="okz5nboyn"/><path class="s8e7uwb1s"/></g>`,
		"fallback": "streamline-logos:disney-plus-logo",
	});
}

export default Component;
