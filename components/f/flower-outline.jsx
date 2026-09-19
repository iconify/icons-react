import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws3dbbcgn.css';
import '../../css/p/p1ijl2b0l.css';
import '../../css/y/yo8uw-b3d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws3dbbcgn"/><path class="p1ijl2b0l"/><circle class="yo8uw-b3d"/>`,
		"fallback": "ion:flower-outline",
	});
}

export default Component;
