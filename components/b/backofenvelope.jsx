import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6jby-byc.css';
import '../../css/m/m32igq_in.css';
import '../../css/k/kf81dz8xu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6jby-byc"/><path class="m32igq_in"/><path class="kf81dz8xu"/>`,
		"fallback": "fxemoji:backofenvelope",
	});
}

export default Component;
