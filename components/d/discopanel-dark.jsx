import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz2n8mbgp.css';
import '../../css/w/wsh1fbatf.css';
import '../../css/q/qlxr54bjj.css';
import '../../css/b/b2v1umb_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz2n8mbgp"/><path class="wsh1fbatf"/><path class="qlxr54bjj"/><path class="b2v1umb_q"/>`,
		"fallback": "selfhst:discopanel-dark",
	});
}

export default Component;
