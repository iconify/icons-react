import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fc1zhqbtz.css';
import '../../css/t/t12ob36hi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fc1zhqbtz"/><path class="t12ob36hi"/></g>`,
		"fallback": "tabler:device-remote",
	});
}

export default Component;
