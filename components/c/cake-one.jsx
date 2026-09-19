import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/ziwosab9a.css';
import '../../css/c/cpznl-jyx.css';
import '../../css/r/rc5h_rlcn.css';
import '../../css/v/veaom2e6k.css';
import '../../css/n/n03gsccew.css';
import '../../css/k/ks2x0ybhf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ziwosab9a"/><circle class="cpznl-jyx"/><path class="rc5h_rlcn"/><path class="veaom2e6k"/><path class="n03gsccew"/><path class="ks2x0ybhf"/></g>`,
		"fallback": "icon-park-outline:cake-one",
	});
}

export default Component;
