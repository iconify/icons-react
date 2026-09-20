import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5e_cby5o.css';
import '../../css/t/tncgtrlau.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5e_cby5o"/><path class="tncgtrlau"/>`,
		"fallback": "selfhst:android-auto-dark",
	});
}

export default Component;
