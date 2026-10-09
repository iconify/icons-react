import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkl3kalhn.css';
import '../../css/x/xkgq43b2x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkl3kalhn"/><path class="xkgq43b2x"/>`,
		"fallback": "energy-icons:bold-48",
	});
}

export default Component;
