import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vae9wug9c.css';
import '../../css/n/n6i76ubbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vae9wug9c"/><path class="n6i76ubbw"/></g>`,
		"fallback": "tabler:chart-histogram",
	});
}

export default Component;
