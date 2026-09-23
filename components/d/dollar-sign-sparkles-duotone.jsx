import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qctrx8w3m.css';
import '../../css/l/lxr-c948j.css';
import '../../css/g/gug740nnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qctrx8w3m"/><path class="lxr-c948j"/><path class="gug740nnc"/></g>`,
		"fallback": "keyline-icons:dollar-sign-sparkles-duotone",
	});
}

export default Component;
