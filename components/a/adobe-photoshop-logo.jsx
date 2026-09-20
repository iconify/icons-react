import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/m/mnkr_9b9u.css';
import '../../css/e/e6x_lacct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="mnkr_9b9u"/><path class="e6x_lacct"/></g>`,
		"fallback": "streamline-logos:adobe-photoshop-logo",
	});
}

export default Component;
