import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb_6zehsb.css';
import '../../css/a/apnp5gdot.css';
import '../../css/h/hrnz-_fwn.css';
import '../../css/n/n8djdob2b.css';
import '../../css/m/mdvkzyeua.css';
import '../../css/x/x9bm-ebsp.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 mb_6zehsb"/><path class="apnp5gdot clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 hrnz-_fwn"/><path class="clr-i-outline clr-i-outline-path-4 n8djdob2b"/><path class="clr-i-outline clr-i-outline-path-5 mdvkzyeua"/><path class="clr-i-outline clr-i-outline-path-6 x9bm-ebsp"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:coin-bag-line",
	});
}

export default Component;
