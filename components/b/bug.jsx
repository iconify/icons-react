import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/gk26fvt2o.css';
import '../../css/n/nswfnbclt.css';
import '../../css/w/w8nste1qj.css';
import '../../css/i/izvj3goyw.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="gk26fvt2o"/><path class="nswfnbclt wm-shine"/><path class="w8nste1qj wm-k"/><path class="izvj3goyw wm-a"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bug",
	});
}

export default Component;
