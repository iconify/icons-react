import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/awd2mzbze.css';
import '../../css/g/g_8sig3wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="awd2mzbze"/><path class="g_8sig3wa"/></g>`,
		"fallback": "keyline-icons:diagram-predecessor-duotone",
	});
}

export default Component;
