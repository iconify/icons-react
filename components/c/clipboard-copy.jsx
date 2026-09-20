import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v5j1rw9fa.css';
import '../../css/a/a_2ke6t6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v5j1rw9fa"/><path class="a_2ke6t6r"/></g>`,
		"fallback": "tabler:clipboard-copy",
	});
}

export default Component;
