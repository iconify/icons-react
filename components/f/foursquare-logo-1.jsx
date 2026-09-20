import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tcqowceip.css';
import '../../css/x/xkt22hbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="tcqowceip"/><path class="xkt22hbiv"/></g>`,
		"fallback": "streamline-logos:foursquare-logo-1",
	});
}

export default Component;
