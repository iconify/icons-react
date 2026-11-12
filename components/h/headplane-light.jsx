import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l65irgbeq.css';
import '../../css/h/h-ks45b_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l65irgbeq"/><path class="h-ks45b_x"/>`,
		"fallback": "selfhst:headplane-light",
	});
}

export default Component;
