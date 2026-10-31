import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wsbu9urln.css';
import '../../css/v/v249j39fq.css';
import '../../css/i/i3bl3xbpw.css';
import '../../css/m/m547vkbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow wsbu9urln"/><path class="v249j39fq wm-shadow"/><path class="i3bl3xbpw"/><path class="m547vkbqu"/></g>`,
		"fallback": "withicons-brutal:bath",
	});
}

export default Component;
