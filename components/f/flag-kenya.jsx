import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/x/x68m2115d.css';
import '../../css/p/pjo79z61i.css';
import '../../css/q/qf407mj3u.css';
import '../../css/c/crzbm_bkf.css';
import '../../css/o/o9cvp5-qa.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="u9hq09b6k"/><path class="x68m2115d"/><path class="pjo79z61i"/><path class="qf407mj3u"/><path class="crzbm_bkf"/><path class="o9cvp5-qa"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-kenya",
	});
}

export default Component;
