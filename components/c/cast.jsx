import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gvjxtnbqi.css';
import '../../css/a/akkr88bkt.css';
import '../../css/q/q15h6qb9j.css';
import '../../css/h/heiy1ibgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gvjxtnbqi wm-shadow"/><path class="akkr88bkt wm-shadow"/><path class="q15h6qb9j"/><path class="heiy1ibgo"/></g>`,
		"fallback": "withicons-brutal:cast",
	});
}

export default Component;
