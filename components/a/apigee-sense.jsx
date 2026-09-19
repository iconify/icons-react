import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttatuib8i.css';
import '../../css/j/jdr9a7bii.css';
import '../../css/l/l04bb08wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttatuib8i"/><path class="jdr9a7bii"/><path class="l04bb08wk"/>`,
		"fallback": "gcp:apigee-sense",
	});
}

export default Component;
