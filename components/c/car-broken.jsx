import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/veyyb0srw.css';
import '../../css/b/be3goyo9p.css';
import '../../css/t/tf5n4ib8z.css';
import '../../css/x/xbpaam-ee.css';
import '../../css/k/kjdqdibrw.css';
import '../../css/f/f65xbnl5h.css';
import '../../css/m/m73qz7bym.css';
import '../../css/s/swhtzkbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="veyyb0srw"/><path class="be3goyo9p"/><path class="tf5n4ib8z"/><path class="xbpaam-ee"/><path class="kjdqdibrw"/><path class="f65xbnl5h"/><path class="m73qz7bym"/><path class="swhtzkbvj"/></g>`,
		"fallback": "solar:car-broken",
	});
}

export default Component;
