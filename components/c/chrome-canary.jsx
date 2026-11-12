import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd6mj9e-i.css';
import '../../css/u/ublh2lbji.css';
import '../../css/p/phprfuhss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd6mj9e-i"/><path class="ublh2lbji"/><path class="phprfuhss"/>`,
		"fallback": "selfhst:chrome-canary",
	});
}

export default Component;
