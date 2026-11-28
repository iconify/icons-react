import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d35cr1bzu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uuphcfbpa.css';
import '../../css/s/s17gsfb4w.css';
import '../../css/y/y5sn-cbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d35cr1bzu secondary"/><g class="dt0cm9dhy primary"><path class="uuphcfbpa"/><path class="s17gsfb4w"/><path class="y5sn-cbkf"/></g>`,
		"fallback": "iconaut:book-copy-duo",
	});
}

export default Component;
