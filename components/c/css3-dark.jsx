import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kduu9pbdz.css';
import '../../css/x/xpct6_bqj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kduu9pbdz"/><path class="xpct6_bqj"/>`,
		"fallback": "selfhst:css3-dark",
	});
}

export default Component;
