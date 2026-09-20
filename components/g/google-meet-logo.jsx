import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/j/j8apkbcaj.css';
import '../../css/f/fl6z1dfsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="j8apkbcaj"/><path class="fl6z1dfsf"/></g>`,
		"fallback": "streamline-logos:google-meet-logo",
	});
}

export default Component;
