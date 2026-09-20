import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mkmw-5b4o.css';
import '../../css/e/eqxsdnbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mkmw-5b4o"/><path class="eqxsdnbpn"/></g>`,
		"fallback": "keyline-icons:headset-two-tone",
	});
}

export default Component;
