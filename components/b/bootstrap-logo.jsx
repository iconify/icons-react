import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/m/mbnm3kbpl.css';
import '../../css/m/moj7v6btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="mbnm3kbpl"/><path class="moj7v6btg"/></g>`,
		"fallback": "streamline-logos:bootstrap-logo",
	});
}

export default Component;
