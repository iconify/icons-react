import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yjzaxtb5n.css';
import '../../css/h/h1ze9n2qc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yjzaxtb5n"/><path class="h1ze9n2qc"/></g>`,
		"fallback": "tabler:archive-off",
	});
}

export default Component;
