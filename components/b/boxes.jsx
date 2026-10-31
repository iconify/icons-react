import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jqbby3h5x.css';
import '../../css/k/kzdzo5b_q.css';
import '../../css/s/swivn2bwr.css';
import '../../css/w/wlhq7ybsa.css';
import '../../css/g/giik4rggg.css';
import '../../css/c/c833j6qsu.css';
import '../../css/d/dc4p45b7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jqbby3h5x wm-shadow"/><path class="kzdzo5b_q wm-shadow"/><path class="swivn2bwr"/><path class="wlhq7ybsa"/><path class="giik4rggg"/><path class="c833j6qsu"/><path class="dc4p45b7s"/></g>`,
		"fallback": "withicons-brutal:boxes",
	});
}

export default Component;
