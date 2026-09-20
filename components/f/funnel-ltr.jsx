import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhwf4_tkf.css';
import '../../css/y/ydubk1bie.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhwf4_tkf"/><path class="ydubk1bie"/>`,
		"fallback": "ooui:funnel-ltr",
	});
}

export default Component;
