import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9zop-zes.css';
import '../../css/u/uo65hxbvl.css';
import '../../css/e/e5n8a42iq.css';
import '../../css/r/rbd9assco.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y9zop-zes"/><path class="uo65hxbvl"/><path class="e5n8a42iq"/><path class="rbd9assco"/></g>`,
		"fallback": "streamline-flex-color:galaxy-2",
	});
}

export default Component;
