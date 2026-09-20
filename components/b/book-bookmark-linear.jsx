import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6-bipb9j.css';
import '../../css/t/t-007b-3c.css';
import '../../css/f/fx38fz2eg.css';
import '../../css/d/dmzio9b4p.css';
import '../../css/l/lyw4o5ucl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c6-bipb9j"/><path class="t-007b-3c"/><path class="fx38fz2eg"/><path class="dmzio9b4p"/><path class="lyw4o5ucl"/></g>`,
		"fallback": "solar:book-bookmark-linear",
	});
}

export default Component;
