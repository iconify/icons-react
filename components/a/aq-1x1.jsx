import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e54nb2b2x.css';
import '../../css/w/wjaysjb-c.css';
import '../../css/x/xjsfynbtp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e54nb2b2x"/><path class="wjaysjb-c"/><path transform="matrix(.86021 0 0 .96774 -50 10)" class="xjsfynbtp"/>`,
		"fallback": "flag:aq-1x1",
	});
}

export default Component;
