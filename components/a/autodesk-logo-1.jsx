import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/guil9kbnw.css';
import '../../css/x/xl4ayib2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="guil9kbnw"/><path class="xl4ayib2u"/></g>`,
		"fallback": "streamline-logos:autodesk-logo-1",
	});
}

export default Component;
