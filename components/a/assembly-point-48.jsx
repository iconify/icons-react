import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgw54p84l.css';
import '../../css/z/z89d4cb5m.css';
import '../../css/d/d8r97bbsk.css';
import '../../css/v/v4o1p3uwe.css';
import '../../css/w/wl3x-nbnt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgw54p84l"/><path class="z89d4cb5m"/><path class="d8r97bbsk"/><path class="v4o1p3uwe"/><path class="wl3x-nbnt"/>`,
		"fallback": "energy-icons:assembly-point-48",
	});
}

export default Component;
