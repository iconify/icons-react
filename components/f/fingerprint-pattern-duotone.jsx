import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g5mx1d-ji.css';
import '../../css/c/cp1u7_asv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g5mx1d-ji"/><path class="cp1u7_asv"/></g>`,
		"fallback": "keyline-icons:fingerprint-pattern-duotone",
	});
}

export default Component;
