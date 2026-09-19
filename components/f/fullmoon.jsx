import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm63k1bpv.css';
import '../../css/g/ggrxmcksm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm63k1bpv"/><path class="ggrxmcksm"/>`,
		"fallback": "fxemoji:fullmoon",
	});
}

export default Component;
