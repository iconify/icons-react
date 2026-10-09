import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4_udjxz.css';
import '../../css/i/i3y9_vb_l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti4_udjxz"/><path class="i3y9_vb_l"/>`,
		"fallback": "energy-icons:calendar-days-20",
	});
}

export default Component;
