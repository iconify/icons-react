import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nixs0db4u.css';
import '../../css/k/k51we-bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nixs0db4u"/><path class="k51we-bsf"/></g>`,
		"fallback": "tabler:circuit-diode-zener",
	});
}

export default Component;
