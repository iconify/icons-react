import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ophtlnbgs.css';
import '../../css/v/vv_7hnbbp.css';
import '../../css/i/i4xshbbgd.css';
import '../../css/s/s8as8-bui.css';
import '../../css/s/snykttmcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ophtlnbgs"/><path class="vv_7hnbbp"/><path class="i4xshbbgd"/><path class="s8as8-bui"/><path class="snykttmcs"/></g>`,
		"fallback": "andrsrxn:device-pc-cpu",
	});
}

export default Component;
