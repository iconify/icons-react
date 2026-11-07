import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yhwtfcbit.css';
import '../../css/n/np8ymybnq.css';
import '../../css/l/l19alibyj.css';
import '../../css/b/b7fd3hbhl.css';
import '../../css/r/rcu-dxg4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yhwtfcbit"/><path class="np8ymybnq"/><path class="l19alibyj"/><path class="b7fd3hbhl"/><path class="rcu-dxg4m"/></g>`,
		"fallback": "solar:dumbbell-large-minimalistic-linear",
	});
}

export default Component;
