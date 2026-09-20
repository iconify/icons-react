import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k9xh61zxx.css';
import '../../css/i/iw1-7acct.css';
import '../../css/r/rlg0xc9-z.css';
import '../../css/w/wxio15bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k9xh61zxx"/><path class="iw1-7acct"/><path class="rlg0xc9-z"/><path class="wxio15bwe"/></g>`,
		"fallback": "streamline-ultimate:earpods-ear",
	});
}

export default Component;
