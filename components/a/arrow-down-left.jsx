import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qph67wbba.css';
import '../../css/f/fhycmcb-v.css';
import '../../css/f/fb0las6fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qph67wbba wm-shadow"/><path class="fhycmcb-v wm-k"/><path class="fb0las6fs wm-k"/>`,
		"fallback": "withicons-pastel:arrow-down-left",
	});
}

export default Component;
