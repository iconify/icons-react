import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tz70rrb9c.css';
import '../../css/s/sbf0mdb_x.css';
import '../../css/k/ksody8b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tz70rrb9c"/><path class="sbf0mdb_x"/><path class="ksody8b7h"/></g>`,
		"fallback": "hugeicons:bookmark-remove-01",
	});
}

export default Component;
