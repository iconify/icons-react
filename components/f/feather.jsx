import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aepw7ub7e.css';
import '../../css/g/gswl7tbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aepw7ub7e"/><path class="gswl7tbad"/></g>`,
		"fallback": "tabler:feather",
	});
}

export default Component;
