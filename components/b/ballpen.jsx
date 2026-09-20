import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c5kum6biq.css';
import '../../css/q/q-79sbf5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c5kum6biq"/><path class="q-79sbf5f"/></g>`,
		"fallback": "tabler:ballpen",
	});
}

export default Component;
