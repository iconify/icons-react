import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wj-7246uw.css';
import '../../css/b/bj6jcvcoq.css';
import '../../css/y/y2h8hf9bi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsDv0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsDv0)"><path class="wj-7246uw"/><path class="bj6jcvcoq"/><path class="y2h8hf9bi"/></g>`,
		"fallback": "circle-flags:dv",
	});
}

export default Component;
