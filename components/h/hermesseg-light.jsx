import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpn4e3smv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpn4e3smv"/>`,
		"fallback": "selfhst:hermesseg-light",
	});
}

export default Component;
