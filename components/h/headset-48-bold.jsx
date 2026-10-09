import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr8phfb8h.css';
import '../../css/u/uyuy9qbxm.css';
import '../../css/v/vfxz7qx3l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr8phfb8h"/><path class="uyuy9qbxm"/><path class="vfxz7qx3l"/>`,
		"fallback": "energy-icons:headset-48-bold",
	});
}

export default Component;
