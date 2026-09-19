import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp64embkk.css';
import '../../css/i/i6zzx6b9n.css';
import '../../css/a/a56cl1b3n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp64embkk"/><path class="i6zzx6b9n"/><path class="a56cl1b3n"/>`,
		"fallback": "fxemoji:admissiontickets",
	});
}

export default Component;
