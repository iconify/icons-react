import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl5abcb0s.css';
import '../../css/k/k3ds82w0c.css';
import '../../css/e/ebf9xob5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl5abcb0s"/><path class="k3ds82w0c"/><path class="ebf9xob5t"/>`,
		"fallback": "selfhst:capacitor-runtime-light",
	});
}

export default Component;
