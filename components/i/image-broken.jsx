import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwm-t2b6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwm-t2b6e"/>`,
		"fallback": "cil:image-broken",
	});
}

export default Component;
