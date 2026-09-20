import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/w/w6175y.css';
import '../../css/n/nilocg.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew w6175y"/><path class="iw1iew nilocg"/>`,
		"fallback": "line-md:chevron-right-circle-twotone",
	});
}

export default Component;
