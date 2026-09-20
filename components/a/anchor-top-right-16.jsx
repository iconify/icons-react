import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf_1fb-pf.css';
import '../../css/p/po8eo_bgh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf_1fb-pf"/><path class="po8eo_bgh"/>`,
		"fallback": "qlementine-icons:anchor-top-right-16",
	});
}

export default Component;
