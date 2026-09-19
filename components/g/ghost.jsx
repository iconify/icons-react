import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy6_9_bea.css';
import '../../css/p/pmwtv-rax.css';
import '../../css/x/xai6gubor.css';
import '../../css/y/yosw-cc2e.css';
import '../../css/d/dbgippb-x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy6_9_bea"/><path class="pmwtv-rax"/><path class="xai6gubor"/><path class="yosw-cc2e"/><path class="dbgippb-x"/>`,
		"fallback": "fxemoji:ghost",
	});
}

export default Component;
