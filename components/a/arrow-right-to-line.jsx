import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n99c7obse.css';
import '../../css/a/av_m4nb6v.css';
import '../../css/u/ul75skb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n99c7obse wm-shadow"/><path class="av_m4nb6v wm-shadow"/><path class="ul75skb8p"/></g>`,
		"fallback": "withicons-brutal:arrow-right-to-line",
	});
}

export default Component;
