import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t-007b-3c.css';
import '../../css/f/fx38fz2eg.css';
import '../../css/p/paayxvxde.css';
import '../../css/n/ntvm_9bvl.css';
import '../../css/j/jmldb8eaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t-007b-3c"/><path class="fx38fz2eg"/><path class="paayxvxde"/><path class="ntvm_9bvl"/><path class="jmldb8eaf"/></g>`,
		"fallback": "solar:book-2-broken",
	});
}

export default Component;
