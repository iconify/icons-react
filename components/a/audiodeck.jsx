import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exvj5hvyn.css';
import '../../css/s/sdgx1tzay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exvj5hvyn"/><path class="sdgx1tzay"/>`,
		"fallback": "selfhst:audiodeck",
	});
}

export default Component;
