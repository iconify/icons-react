import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/a/afinsdbgv.css';
import '../../css/s/sm19g-0bx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="afinsdbgv"/><path class="sm19g-0bx"/></g>`,
		"fallback": "streamline-logos:cloudsmith-logo",
	});
}

export default Component;
