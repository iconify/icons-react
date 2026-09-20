import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bid-turbb.css';
import '../../css/t/t7741obxh.css';
import '../../css/c/cjo2vfb7a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bid-turbb"/><path class="t7741obxh"/><path class="cjo2vfb7a"/>`,
		"fallback": "selfhst:bentopdf",
	});
}

export default Component;
