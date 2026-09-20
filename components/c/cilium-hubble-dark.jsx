import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsp2f4jtx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsp2f4jtx"/>`,
		"fallback": "selfhst:cilium-hubble-dark",
	});
}

export default Component;
