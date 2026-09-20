import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p61-0ivql.css';
import '../../css/k/ki1zkpbpv.css';
import '../../css/g/govy24b2c.css';
import '../../css/t/td_7qkq1w.css';
import '../../css/w/w15xar7bj.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p61-0ivql"/><path class="ki1zkpbpv"/><path class="govy24b2c"/><path class="td_7qkq1w"/><path class="w15xar7bj"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-guadeloupe",
	});
}

export default Component;
