import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvc98vv-q.css';
import '../../css/q/qqemq84bb.css';
import '../../css/v/vh1dgbcue.css';
import '../../css/t/tcfp_5smf.css';
import '../../css/i/ixh0c7byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dvc98vv-q"/><path class="qqemq84bb"/><circle class="vh1dgbcue"/><circle class="tcfp_5smf"/><circle class="ixh0c7byx"/></g>`,
		"fallback": "lets-icons:chemistry",
	});
}

export default Component;
