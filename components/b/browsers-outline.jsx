import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpbqltkex.css';
import '../../css/m/mkt8b3bpv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wpbqltkex"/><path class="mkt8b3bpv"/>`,
		"fallback": "ion:browsers-outline",
	});
}

export default Component;
