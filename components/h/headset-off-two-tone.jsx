import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sju7hxb0f.css';
import '../../css/l/lhetc-bfv.css';
import '../../css/y/ygujsbc4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sju7hxb0f"/><path class="lhetc-bfv"/><path class="ygujsbc4z"/></g>`,
		"fallback": "keyline-icons:headset-off-two-tone",
	});
}

export default Component;
