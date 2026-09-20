import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb6nh_xop.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb6nh_xop"/>`,
		"fallback": "selfhst:dokemon",
	});
}

export default Component;
