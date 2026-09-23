import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c6eyadc1h.css';
import '../../css/l/lxr-c948j.css';
import '../../css/t/t5_z6hmum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c6eyadc1h"/><path class="lxr-c948j"/><path class="t5_z6hmum"/></g>`,
		"fallback": "keyline-icons:hand-pointer-sparkles-duotone",
	});
}

export default Component;
