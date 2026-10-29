import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mw2oadc3t.css';
import '../../css/g/gwhh02bok.css';
import '../../css/k/kepr7i-nd.css';
import '../../css/v/vgqd6ux5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mw2oadc3t wm-k"/><path class="gwhh02bok wm-k"/><path class="kepr7i-nd wm-k"/><path class="vgqd6ux5c wm-a"/></g>`,
		"fallback": "withicons-anime:barcode",
	});
}

export default Component;
