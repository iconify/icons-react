import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wfstmsjum.css';
import '../../css/p/pa3vqph5t.css';
import '../../css/i/id1cbpb8a.css';
import '../../css/o/o5lgej52u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wfstmsjum wm-shadow"/><path class="pa3vqph5t wm-shadow"/><path class="id1cbpb8a"/><path class="o5lgej52u"/></g>`,
		"fallback": "withicons-brutal:bread",
	});
}

export default Component;
