import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwmgjbblk.css';
import '../../css/m/mmfi7hwff.css';
import '../../css/y/yo8uw-b3d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwmgjbblk"/><path class="mmfi7hwff"/><circle class="yo8uw-b3d"/>`,
		"fallback": "ion:flower-outline",
	});
}

export default Component;
