import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/awd2mzbze.css';
import '../../css/f/fvps8cbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="awd2mzbze"/><path class="fvps8cbgi"/></g>`,
		"fallback": "keyline-icons:diagram-predecessor-two-tone",
	});
}

export default Component;
