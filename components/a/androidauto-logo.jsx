import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/twh8fsbtt.css';
import '../../css/x/xu580sl9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="twh8fsbtt"/><path class="xu580sl9m"/></g>`,
		"fallback": "streamline-logos:androidauto-logo",
	});
}

export default Component;
