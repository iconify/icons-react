import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gzjgc_t0q.css';
import '../../css/f/f_gnwzb8z.css';
import '../../css/f/ffkql_u2f.css';
import '../../css/p/pehdjub8p.css';
import '../../css/r/rw8hl94tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gzjgc_t0q"/><path class="f_gnwzb8z"/><path class="ffkql_u2f"/><path class="pehdjub8p"/><path class="rw8hl94tg"/></g>`,
		"fallback": "solar:book-bookmark-minimalistic-line-duotone",
	});
}

export default Component;
