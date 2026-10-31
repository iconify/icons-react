import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tn8ic7bdh.css';
import '../../css/p/p7_8ibche.css';
import '../../css/i/ixshdea3r.css';
import '../../css/s/sdiu6gb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tn8ic7bdh wm-shadow"/><path class="p7_8ibche wm-shadow"/><path class="ixshdea3r"/><path class="sdiu6gb-r"/></g>`,
		"fallback": "withicons-brutal:battery-medium",
	});
}

export default Component;
