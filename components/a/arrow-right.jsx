import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/whgwbv7tv.css';
import '../../css/x/xb_55wbon.css';
import '../../css/h/heqoxib7c.css';
import '../../css/m/mmnavtbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="whgwbv7tv wm-shadow"/><path class="wm-shadow xb_55wbon"/><path class="heqoxib7c"/><path class="mmnavtbbs"/></g>`,
		"fallback": "withicons-brutal:arrow-right",
	});
}

export default Component;
