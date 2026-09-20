import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e6x_lacct.css';
import '../../css/e/e3z5pfb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="e6x_lacct"/><path class="e3z5pfb6m"/></g>`,
		"fallback": "streamline-logos:adobe-audio-logo",
	});
}

export default Component;
