import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yq5outbnn.css';
import '../../css/h/h9xdm6kyq.css';
import '../../css/d/dkh8f-qdu.css';
import '../../css/v/vtg6btbak.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yq5outbnn"/><path class="h9xdm6kyq"/><path clip-rule="evenodd" class="dkh8f-qdu"/><path class="vtg6btbak"/></g>`,
		"fallback": "glyphs:celsius-outline",
	});
}

export default Component;
