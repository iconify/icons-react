import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l-quodbjv.css';
import '../../css/q/qj_b8bcbo.css';
import '../../css/q/q054rm63k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l-quodbjv"/><path class="qj_b8bcbo"/><path class="q054rm63k"/></g>`,
		"fallback": "keyline-icons:git-pull-request-draft-duotone",
	});
}

export default Component;
