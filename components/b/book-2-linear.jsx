import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gzjgc_t0q.css';
import '../../css/e/ea4-e_dow.css';
import '../../css/t/t-007b-3c.css';
import '../../css/f/fx38fz2eg.css';
import '../../css/j/jmldb8eaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gzjgc_t0q"/><path class="ea4-e_dow"/><path class="t-007b-3c"/><path class="fx38fz2eg"/><path class="jmldb8eaf"/></g>`,
		"fallback": "solar:book-2-linear",
	});
}

export default Component;
