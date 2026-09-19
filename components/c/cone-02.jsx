import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mq4cs___m.css';
import '../../css/n/nkq7hz70u.css';
import '../../css/e/edrk12x5i.css';
import '../../css/u/umavi9bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mq4cs___m"/><path class="nkq7hz70u"/><path class="edrk12x5i"/><path class="umavi9bru"/></g>`,
		"fallback": "hugeicons:cone-02",
	});
}

export default Component;
