import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zs9z5gbzp.css';
import '../../css/g/gn8n_3teu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zs9z5gbzp"/><path class="gn8n_3teu"/></g>`,
		"fallback": "tabler:alien",
	});
}

export default Component;
