import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs69m8bix.css';
import '../../css/o/ov3odebtm.css';
import '../../css/d/d3hmicx4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs69m8bix"/><path class="ov3odebtm"/><path class="d3hmicx4b"/>`,
		"fallback": "selfhst:flaresolverr",
	});
}

export default Component;
