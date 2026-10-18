import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-hur1b5v.css';
import '../../css/a/aopizzb2e.css';
import '../../css/a/a1qr1ll0u.css';
import '../../css/n/nd-wmcbhn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-hur1b5v"/><path class="aopizzb2e"/><path class="a1qr1ll0u"/><path class="nd-wmcbhn"/>`,
		"fallback": "energy-icons:cycle-lane-48-bold",
	});
}

export default Component;
